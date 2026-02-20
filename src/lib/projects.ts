import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { ProjectFrontmatter, Project } from '@/types/project';
import { getExperienceById, getAllExperiences } from '@/data/experiences';
import type { Experience } from '@/types/experience';

const PROJECTS_PATH = path.join(process.cwd(), 'content/projects');

/**
 * 모든 프로젝트 메타데이터 조회 (목록 페이지용)
 * @returns 최신순으로 정렬된 프로젝트 메타데이터 배열
 */
export function getAllProjects(): ProjectFrontmatter[] {
    // MDX 파일 목록 가져오기
    const files = fs.readdirSync(PROJECTS_PATH).filter(f => f.endsWith('.mdx'));

    const projects = files.map(fileName => {
        const slug = fileName.replace(/\.mdx$/, '');
        const filePath = path.join(PROJECTS_PATH, fileName);
        const source = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(source);

        return {
            slug,
            ...data,
        } as ProjectFrontmatter;
    });

    // 기간 기준 최신순 정렬 (최근 프로젝트가 먼저)
    return projects.sort((a, b) => {
        // period 형식: "2024.01 - 2024.03" 또는 "2024.01 - 진행중"
        const dateStrA = a.period.split(' - ')[0].trim();
        const dateStrB = b.period.split(' - ')[0].trim();

        // "YYYY.MM" -> "YYYY-MM" 형식으로 변환
        const dateA = new Date(dateStrA.replace('.', '-') + '-01');
        const dateB = new Date(dateStrB.replace('.', '-') + '-01');

        return dateB.getTime() - dateA.getTime();
    });
}

/**
 * 대표 프로젝트만 조회 (홈 페이지용)
 * @returns featured가 true인 프로젝트 배열
 */
export function getFeaturedProjects(): ProjectFrontmatter[] {
    return getAllProjects().filter(p => p.featured);
}

/**
 * 특정 프로젝트 상세 조회 (상세 페이지용)
 * @param slug 프로젝트 slug
 * @returns 프로젝트 frontmatter와 content
 */
export async function getProjectBySlug(slug: string): Promise<Project> {
    const filePath = path.join(PROJECTS_PATH, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(source);

    return {
        slug,
        frontmatter: data as ProjectFrontmatter,
        content,
    };
}

/**
 * 모든 프로젝트 슬러그 조회 (정적 생성용)
 * @returns  모든 프로젝트의 slug 배열
 */
export function getAllProjectSlugs(): string[] {
    const files = fs.readdirSync(PROJECTS_PATH);
    return files
        .filter(f => f.endsWith('.mdx'))
        .map(f => f.replace(/\.mdx$/, ''));
}

/**
 * period 문자열을 파싱하여 시작/종료 날짜 반환
 * @param period "YYYY.MM - YYYY.MM" 또는 "YYYY.MM - 현재"
 * @returns { start: "YYYY-MM", end: "YYYY-MM" | null }
 */
function parsePeriod(period: string): { start: string; end: string | null } {
    const parts = period.split(/\s*[-~]\s*/);
    if (parts.length !== 2) {
        return { start: '', end: null };  // Fallback
    }

    const startStr = parts[0].trim().replace('.', '-');  // "YYYY.MM" -> "YYYY-MM"
    const endStr = parts[1].trim();

    const start = startStr;
    const end = endStr === '현재' || endStr === '진행중'
        ? null
        : endStr.replace('.', '-');

    return { start, end };
}

/**
 * 두 기간이 겹치는지 판단하고 겹치는 월 수 반환
 * @param projStart 프로젝트 시작 "YYYY-MM"
 * @param projEnd 프로젝트 종료 "YYYY-MM" | null
 * @param expStart Experience 시작 "YYYY-MM"
 * @param expEnd Experience 종료 "YYYY-MM" | null
 * @returns 겹치는 월 수
 */
function calculateOverlapMonths(
    projStart: string,
    projEnd: string | null,
    expStart: string,
    expEnd: string | null
): number {
    // YYYY-MM -> Date 변환 (1일로 통일)
    const ps = new Date(projStart + '-01');
    const pe = projEnd ? new Date(projEnd + '-01') : new Date();  // null이면 현재
    const es = new Date(expStart + '-01');
    const ee = expEnd ? new Date(expEnd + '-01') : new Date();

    // 겹치지 않는 경우
    if (pe < es || ps > ee) {
        return 0;
    }

    // 겹치는 구간 계산
    const overlapStart = new Date(Math.max(ps.getTime(), es.getTime()));
    const overlapEnd = new Date(Math.min(pe.getTime(), ee.getTime()));

    // 월 수 계산 (대략)
    const months = (overlapEnd.getTime() - overlapStart.getTime()) / (1000 * 60 * 60 * 24 * 30);

    // 최소 1개월 보장 (같은 달 프로젝트 포함)
    return Math.max(1, Math.round(months));
}

/**
 * 프로젝트를 가장 적합한 Experience에 할당
 * @param project 프로젝트 frontmatter
 * @param experiences 모든 재직 경험
 * @returns 매칭된 Experience ID 또는 null
 */
function matchProjectToExperience(
    project: ProjectFrontmatter,
    experiences: Experience[]
): string | null {
    // 수동 지정 우선: experienceId가 있으면 자동 매칭 건너뜀
    if (project.experienceId) {
        const found = experiences.find(e => e.id === project.experienceId);
        return found ? project.experienceId : null;
    }

    const { start: projStart, end: projEnd } = parsePeriod(project.period);

    if (!projStart) {
        return null;  // 파싱 실패 -> 기타
    }

    let bestMatch: { expId: string; months: number } | null = null;

    for (const exp of experiences) {
        const months = calculateOverlapMonths(
            projStart,
            projEnd,
            exp.start,
            exp.end
        );

        if (months > 0) {
            // 가장 많이 겹치는 경험 선택
            if (!bestMatch || months > bestMatch.months) {
                bestMatch = { expId: exp.id, months };
            } else if (months === bestMatch.months) {
                // 동률이면 더 최근 경험 선택
                const currentBest = experiences.find(e => e.id === bestMatch!.expId);
                if (currentBest && exp.order < currentBest.order) {
                    bestMatch = { expId: exp.id, months };
                }
            }
        }
    }

    return bestMatch?.expId || null;
}

/**
 * Experience별로 프로젝트 그룹핑 (기간 겹침 기반 자동 매칭)
 * @returns Experience와 해당하는 프로젝트 배열
 */
export function getProjectsByExperience() {
    const allProjects = getAllProjects();
    const experiences = getAllExperiences();

    // 자동 매칭
    const projectsByExp = new Map<string, ProjectFrontmatter[]>();
    const unmatchedProjects: ProjectFrontmatter[] = [];

    allProjects.forEach(project => {
        const expId = matchProjectToExperience(project, experiences);

        if (expId) {
            if (!projectsByExp.has(expId)) {
                projectsByExp.set(expId, []);
            }
            projectsByExp.get(expId)!.push(project);
        } else {
            unmatchedProjects.push(project);
        }
    });

    // Experience 순서대로 결과 생성
    const result = experiences.map(exp => ({
        experience: exp,
        projects: projectsByExp.get(exp.id) || [],
    }));

    // "기타" 그룹 추가
    if (unmatchedProjects.length > 0) {
        result.push({
            experience: {
                id: 'others',
                company: '기타',
                start: '',
                end: null,
                title: '개인 프로젝트 / 외부 활동',
                summary: '재직 기간 외 프로젝트',
                order: 999,
            },
            projects: unmatchedProjects,
        });
    }

    return result;
}
