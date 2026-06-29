import Link from 'next/link';
import Image from 'next/image';
import type { ProjectFrontmatter } from '@/types/project';
import { Badge } from '@/components/common/Badge';

interface ProjectCardProps {
    project: ProjectFrontmatter;
    variant?: 'default' | 'simple';
}

export function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
    const isSimple = variant === 'simple';

    return (
        <Link
            href={`/projects/${project.slug}`}
            className={`block bg-gray-50 overflow-hidden group transition-all hover:bg-gray-100${isSimple ? ' flex flex-col h-full' : ''}`}
            style={{ borderRadius: '18px' }}
        >
            <article className={isSimple ? 'flex flex-col flex-1' : ''}>
                {project.thumbnail && (
                    <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
                        <Image
                            src={project.thumbnail}
                            alt={`${project.title} 썸네일`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                )}

                <div className={`p-6 break-keep${isSimple ? ' flex flex-col flex-1' : ''}`}>
                    {/* 헤더: 모바일 세로 스택 → sm 이상 가로 인라인 배치 */}
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between mb-4">
                        <h3 className="text-base font-bold text-slate-900 leading-snug break-keep">
                            {project.title}
                        </h3>
                        <span className="shrink-0 text-xs text-slate-400 font-normal">
                            {project.period}
                        </span>
                    </div>

                    {/* ROLE 섹션 — 항상 표시, simple에서는 조밀하게 */}
                    {project.role && project.role.length > 0 && (
                        <div className="mb-4">
                            <span className={`font-bold tracking-wider text-blue-600 block${isSimple ? ' text-[10px] mb-1' : ' text-[11px] mb-1.5'}`}>
                                ROLE
                            </span>
                            <ul className="flex flex-col gap-1">
                                {project.role.map((r, idx) => (
                                    <li key={idx} className={`flex items-start gap-1 text-slate-500${isSimple ? ' text-[11px] leading-snug' : ' text-xs leading-relaxed'}`}>
                                        <span className="shrink-0 mt-px text-slate-300">·</span>
                                        <span className="break-keep">{r}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* SUMMARY 섹션 — default 전용 */}
                    {!isSimple && (
                        <div className="mb-4">
                            <span className="text-[11px] font-bold tracking-wider text-blue-600 block mb-1.5">
                                SUMMARY
                            </span>
                            <div className="bg-slate-50/70 p-3.5 rounded-lg border border-slate-100 max-w-3xl space-y-1.5">
                                {Array.isArray(project.summary) ? (
                                    project.summary.map((item, idx) => (
                                        <p key={idx} className="text-xs text-slate-600 leading-relaxed break-keep">
                                            {item}
                                        </p>
                                    ))
                                ) : (
                                    <p className="text-xs text-slate-600 leading-relaxed break-keep">
                                        {project.summary}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* TECH STACK 섹션 — 항상 표시, simple에서는 mt-auto로 하단 고정 */}
                    <div className={`mb-4${isSimple ? ' mt-auto' : ''}`}>
                        <span className="text-[11px] font-bold tracking-wider text-blue-600 block mb-1.5">
                            TECH STACK
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                            {project.stack.slice(0, 4).map(tech => (
                                <Badge key={tech}>{tech}</Badge>
                            ))}
                            {project.stack.length > 4 && (
                                <Badge>+{project.stack.length - 4}</Badge>
                            )}
                        </div>
                    </div>

                    {/* KEY ACHIEVEMENTS 섹션 — default 전용 */}
                    {!isSimple && project.result && project.result.length > 0 && (
                        <div className="pt-4 pb-2 border-t border-dashed border-slate-200/80">
                            <span className="text-[11px] font-bold tracking-wider text-blue-600 block mb-2">
                                KEY ACHIEVEMENTS
                            </span>
                            <div className="flex flex-col gap-1.5">
                                {project.result.map((item, idx) => (
                                    <p key={idx} className="text-xs text-slate-600 leading-relaxed font-medium break-keep">
                                        → {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </article>
        </Link>
    );
}
