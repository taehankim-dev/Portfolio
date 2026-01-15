import type { ProjectFrontmatter } from '@/types/project';

/**
 * 대표 프로젝트 선택
 * 1. featured === true
 * 2. result가 많은 프로젝트
 * 3. 최신 프로젝트
 */
export function getRepresentativeProject(
    projects: ProjectFrontmatter[]
): ProjectFrontmatter | null {
    if (projects.length === 0) return null;

    // 우선순위 1: featured
    const featured = projects.find(p => p.featured);
    if (featured) return featured;

    // 우선순위 2: result 많은 것
    const byResult = [...projects].sort((a, b) => b.result.length - a.result.length);
    if (byResult[0].result.length > 0) return byResult[0];

    // 우선순위 3: 최신 (projects는 이미 최신순 정렬됨)
    return projects[0];
}
