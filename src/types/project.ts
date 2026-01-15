export interface ProjectFrontmatter {
    slug: string;
    title: string;
    company: string;         // 회사명 (표시용)
    period: string;          // 프로젝트 기간 (예: "2025.09 - 2026.01")
    role: string[];
    stack: string[];
    summary: string;
    problem: string;
    result: string[];
    thumbnail?: string;
    featured: boolean;
}

export interface Project {
    slug: string;
    frontmatter: ProjectFrontmatter;
    content: string;
}
