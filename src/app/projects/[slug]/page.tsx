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
    return {
        title: `${project.frontmatter.title} | 포트폴리오`,
        description: project.frontmatter.summary,
        openGraph: {
            images: project.frontmatter.thumbnail ? [project.frontmatter.thumbnail] : [],
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

    return (
        <div className="space-y-4 pb-24 lg:pb-8">
            {/* ── Project Header Card ─────────────────────────────────── */}
            <div className="bg-white px-8 py-10" style={{ borderRadius: '28px' }}>

                {/* 뒤로가기 */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 transition-colors mb-6 font-medium"
                >
                    ← 프로젝트 목록
                </Link>

                {/* 제목 */}
                <h1 className="text-2xl font-bold text-gray-900 leading-snug mb-3 tracking-tight">
                    {frontmatter.title}
                </h1>

                {/* 메타 정보 */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400 mb-6">
                    <span>{frontmatter.company}</span>
                    <span>·</span>
                    <span>{frontmatter.period}</span>
                    <span>·</span>
                    <span>{frontmatter.role.join(', ')}</span>
                </div>

                {/* 기술 스택 뱃지 */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                    {frontmatter.stack.map(tech => (
                        <Badge key={tech}>{tech}</Badge>
                    ))}
                </div>

                {/* 문제 / 성과 요약 카드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                        className="bg-gray-50 px-5 py-4"
                        style={{ borderRadius: '16px' }}
                    >
                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
                            Problem
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            {frontmatter.problem}
                        </p>
                    </div>
                    <div
                        className="bg-gray-50 px-5 py-4"
                        style={{ borderRadius: '16px' }}
                    >
                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
                            Result
                        </p>
                        <ul className="space-y-1.5">
                            {frontmatter.result.map((r, i) => (
                                <li key={i} className="text-sm text-gray-700 leading-relaxed flex gap-2">
                                    <span className="text-gray-300 shrink-0 mt-0.5">→</span>
                                    <span>{r}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* ── 2-Column Layout: Body + TOC ────────────────────────── */}
            <div className="flex gap-4 items-start">

                {/* 본문 카드 */}
                <div className="bg-white px-8 py-8 flex-1 min-w-0" style={{ borderRadius: '28px' }}>
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

                {/* Desktop TOC sidebar */}
                <TableOfContents headings={headings} />
            </div>

            {/* Mobile TOC floating button */}
            <MobileToC headings={headings} />
        </div>
    );
}
