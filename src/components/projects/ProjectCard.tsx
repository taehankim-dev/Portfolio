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
            className={`block border rounded-lg overflow-hidden transition-colors bg-white relative ${project.featured
                    ? 'border-gray-900 shadow-sm'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
        >
            <article>
                {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded z-10">
                        대표 프로젝트
                    </div>
                )}

                {project.thumbnail && (
                    <div className="relative w-full h-48 bg-gray-50">
                        <Image
                            src={project.thumbnail}
                            alt={`${project.title} 썸네일`}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <span>{project.period}</span>
                        <span>·</span>
                        <span>{project.role[0]}</span>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {project.summary}
                    </p>

                    {project.problem && (
                        <p className="text-xs text-gray-500 mb-3 line-clamp-1">
                            문제: {project.problem}
                        </p>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.slice(0, 4).map(tech => (
                            <Badge key={tech}>{tech}</Badge>
                        ))}
                        {project.stack.length > 4 && (
                            <Badge>+{project.stack.length - 4}</Badge>
                        )}
                    </div>

                    {project.result[0] && (
                        <p className="text-sm text-blue-600">
                            → {project.result[0]}
                        </p>
                    )}
                </div>
            </article>
        </Link>
    );
}
