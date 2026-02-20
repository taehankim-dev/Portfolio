import type { Experience } from '@/types/experience';

export const experiences: Experience[] = [
    // end : null -> 현재 재직 중
    {
        id: 'sarafarm_2026_01_2026_02',
        company: '사라팜 농업회사법인 주식회사',
        start: '2026-01',
        end: '2026-02',
        title: '풀스택 개발자',
        summary: '스마트팜 IoT 플랫폼 개발 및 견적 시스템 구축',
        order: 1,
    },
    {
        id: 'daedan_2023_12_current',
        company: '(주) 대단',
        start: '2023-12',
        end: '2026-01',
        title: '풀스택 개발자',
        summary: '중소 제조기업용 MES 시스템 개발 및 운영',
        order: 2,
    },
    {
        id: 'daedan_2020_09_2021_09',
        company: '(주) 대단',
        start: '2020-09',
        end: '2021-09',
        title: '프론트엔드 개발자',
        summary: 'MES 시스템 프론트엔드 개발 및 모니터링 시스템 개선',
        order: 3,
    },
];

/**
 * Experience ID로 재직 경험 조회
 */
export function getExperienceById(id: string): Experience | undefined {
    return experiences.find(exp => exp.id === id);
}

/**
 * 모든 재직 경험을 order 기준으로 정렬하여 반환 (최신순)
 */
export function getAllExperiences(): Experience[] {
    return [...experiences].sort((a, b) => a.order - b.order);
}

/**
 * Experience의 기간을 "YYYY.MM - YYYY.MM" 형태로 포맷
 */
export function formatExperiencePeriod(exp: Experience): string {
    const start = exp.start.replace('-', '.');
    const end = exp.end ? exp.end.replace('-', '.') : '현재';
    return `${start} - ${end}`;
}
