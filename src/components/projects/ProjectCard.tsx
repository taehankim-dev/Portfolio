import Link from 'next/link';
import Image from 'next/image';
import type { ProjectFrontmatter } from '@/types/project';
import { Badge } from '@/components/common/Badge';

interface ProjectCardProps {
    project: ProjectFrontmatter;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="block bg-gray-50 overflow-hidden relative group transition-all hover:bg-gray-100"
            style={{ borderRadius: '18px' }}
        >
            <article>
                {project.featured && (
                    <div
                        className="absolute top-3 left-3 px-3 py-1 bg-gray-900 text-white text-xs font-medium z-10"
                        style={{ borderRadius: '999px' }}
                    >
                        대표 프로젝트
                    </div>
                )}

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

                <div className="p-6">
                    <h3 className="text-base font-semibold mb-1.5 text-gray-900 leading-snug">
                        {project.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                        <span>{project.period}</span>
                        <span>·</span>
                        <span>{project.role[0]}</span>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.stack.slice(0, 4).map(tech => (
                            <Badge key={tech}>{tech}</Badge>
                        ))}
                        {project.stack.length > 4 && (
                            <Badge>+{project.stack.length - 4}</Badge>
                        )}
                    </div>

                    {project.result[0] && (
                        <p className="text-xs text-gray-500 font-medium">
                            → {project.result[0]}
                        </p>
                    )}
                </div>
            </article>
        </Link>
    );
}
