import type { Metadata } from 'next';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';
import { mdxComponents } from '@/components/mdx/CustomComponents';
import { Badge } from '@/components/common/Badge';
import { TableOfContents } from '@/components/mdx/TableOfContents';
import { MobileToC } from '@/components/mdx/MobileToC';
import type { TocHeading } from '@/components/mdx/TableOfContents';

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map(slug => ({ slug }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);
    const { summary, thumbnail } = project.frontmatter;
    return {
        title: `${project.frontmatter.title} | 김태한의 포트폴리오`,
        description: Array.isArray(summary) ? summary[0] : summary,
        openGraph: {
            images: thumbnail ? [thumbnail] : [],
        },
    };
}

/** MDX 본문에서 ## / ### 헤딩을 추출하여 TOC용 목록 반환 */
function extractHeadings(content: string): TocHeading[] {
    const lines = content.split('\n');
    const headings: TocHeading[] = [];

    for (const line of lines) {
        const h2 = line.match(/^##\s+(.+)/);
        const h3 = line.match(/^###\s+(.+)/);

        const raw = h2?.[1] ?? h3?.[1];
        if (!raw) continue;

        const level = h2 ? 2 : 3;
        const text = raw.trim();
        const id = text
            .toLowerCase()
            .replace(/[^a-z0-9가-힣\s]/g, '')
            .trim()
            .replace(/\s+/g, '-');

        headings.push({ id, text, level });
    }

    return headings;
}

export default async function ProjectPage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);
    const { frontmatter, content } = project;
    const headings = extractHeadings(content);

    // Problem 문자열을 ' / ' 또는 ' - ' 기준으로 분절하여 리스트화
    const problemItems = frontmatter.problem
        .split(/ \/ | - /)
        .map(s => s.trim())
        .filter(Boolean);

    return (
        <div className="space-y-4 pb-24 lg:pb-8">

            {/* ── 헤더 + 바디 + TOC를 하나의 flex로 묶음 ──────────────── */}
            <div className="flex gap-4 items-start">

                {/* 왼쪽 컬럼: 헤더 카드 + 바디 카드 (동일 너비) */}
                <div className="flex-1 min-w-0 space-y-4">

                    {/* ── Project Header Card ───────────────────────────── */}
                    <div
                        className="bg-white px-4 sm:px-8 py-10 shadow-sm"
                        style={{ borderRadius: '28px' }}
                    >
                        {/* 뒤로가기 */}
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 transition-colors mb-6 font-medium"
                        >
                            ← 프로젝트 목록
                        </Link>

                        {/* 제목 */}
                        <h1 className="text-2xl font-bold text-gray-900 leading-snug mb-3 tracking-tight break-keep">
                            {frontmatter.title}
                        </h1>

                        {/* 메타 정보: 회사명 · 기간 (역할은 하단 분리) */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400 mb-5">
                            <span>{frontmatter.company}</span>
                            <span>·</span>
                            <span>{frontmatter.period}</span>
                        </div>

                        {/* 역할 수직 리스트 */}
                        {frontmatter.role && frontmatter.role.length > 0 && (
                            <ul className="flex flex-col gap-1 mb-6">
                                {frontmatter.role.map((r, i) => (
                                    <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600 break-keep">
                                        <span className="text-gray-300 shrink-0 mt-px">·</span>
                                        <span>{r}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* 기술 스택 뱃지 */}
                        <div className="flex flex-wrap gap-1.5 mb-8">
                            {frontmatter.stack.map(tech => (
                                <Badge key={tech}>{tech}</Badge>
                            ))}
                        </div>

                        {/* 문제 / 성과 요약 패널 — items-stretch로 높이 대칭 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                            <div
                                className="bg-gray-50 px-5 py-4 flex flex-col"
                                style={{ borderRadius: '16px' }}
                            >
                                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2.5">
                                    Problem
                                </p>
                                <ul className="space-y-1.5">
                                    {problemItems.map((item, i) => (
                                        <li key={i} className="text-sm text-gray-700 leading-relaxed flex gap-2 break-keep">
                                            <span className="text-gray-400 shrink-0 mt-0.5">→</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div
                                className="bg-gray-900 px-5 py-4 flex flex-col"
                                style={{ borderRadius: '16px' }}
                            >
                                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2.5">
                                    Result
                                </p>
                                <ul className="space-y-1.5">
                                    {frontmatter.result.map((r, i) => (
                                        <li key={i} className="text-sm text-gray-200 leading-relaxed flex gap-2 break-keep">
                                            <span className="text-gray-500 shrink-0 mt-0.5">→</span>
                                            <span>{r}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ── Body Card ─────────────────────────────────────── */}
                    <div
                        className="bg-white px-4 sm:px-8 py-10 shadow-sm prose prose-slate max-w-none break-keep prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed"
                        style={{ borderRadius: '28px' }}
                    >
                        <MDXRemote
                            source={content}
                            components={mdxComponents}
                            options={{
                                mdxOptions: {
                                    remarkPlugins: [remarkGfm],
                                },
                            }}
                        />
                    </div>

                </div>

                {/* 오른쪽: TOC — 콘텐츠 우측에 sticky (lg 이상) */}
                <TableOfContents headings={headings} />

            </div>

            {/* Mobile TOC floating button (lg 미만) */}
            <MobileToC headings={headings} />

        </div>
    );
}
