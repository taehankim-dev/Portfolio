import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';
import { mdxComponents } from '@/components/mdx/CustomComponents';
import { Badge } from '@/components/common/Badge';

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
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

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);
    const { frontmatter, content } = project;

    return (
        <article className="max-w-4xl mx-auto">
            {/* Project Header */}
            <header className="mb-12">
                <h1 className="text-4xl font-bold mb-6 text-gray-900">{frontmatter.title}</h1>

                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6">
                    <span>{frontmatter.period}</span>
                    <span>·</span>
                    {frontmatter.role.map((r, index) => (
                        <span key={r}>
                            {r}
                            {index < frontmatter.role.length - 1 && ', '}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    {frontmatter.stack.map(tech => (
                        <Badge key={tech}>{tech}</Badge>
                    ))}
                </div>

                {/* 문제 상황 & 해결 경험 Box */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r">
                    <dl className="space-y-4">
                        <div>
                            <dt className="text-sm font-semibold text-gray-700 mb-1">문제</dt>
                            <dd className="text-gray-900">{frontmatter.problem}</dd>
                        </div>
                        <div>
                            <dt className="text-sm font-semibold text-gray-700 mb-1">역할</dt>
                            <dd className="text-gray-900">{frontmatter.role.join(', ')}</dd>
                        </div>
                        <div>
                            <dt className="text-sm font-semibold text-gray-700 mb-1">주요 성과</dt>
                            <dd className="text-gray-900">{frontmatter.result[0]}</dd>
                        </div>
                    </dl>
                </div>
            </header>

            {/* MDX Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-strong:text-gray-900 prose-strong:font-semibold">
                <MDXRemote
                    source={content}
                    components={mdxComponents}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm],
                        }
                    }}
                />
            </div>
        </article>
    );
}
