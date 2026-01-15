export interface Experience {
    id: string;              // experienceId와 매칭되는 고유 키
    company: string;         // 회사명
    start: string;           // 시작 날짜 "YYYY-MM" (예: "2020-09")
    end: string | null;      // 종료 날짜 "YYYY-MM" 또는 null (현재 재직 중)
    title: string;           // 직무
    summary: string;         // 재직 기간 요약 (1-2줄)
    order: number;           // 정렬 순서 (낮을수록 최신)
}
