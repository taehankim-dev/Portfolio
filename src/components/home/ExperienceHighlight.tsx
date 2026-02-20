import type { Experience } from '@/types/experience';
import type { ProjectFrontmatter } from '@/types/project';
import { formatExperiencePeriod } from '@/data/experiences';
import { ProjectCard } from '../projects/ProjectCard';
import Link from 'next/link';

interface ExperienceHighlightProps {
    experience: Experience;
    representativeProject: ProjectFrontmatter;
    totalProjects: number;
}

export function ExperienceHighlight({
    experience,
    representativeProject,
    totalProjects
}: ExperienceHighlightProps) {
    return (
        <div
            className="bg-white p-7 mb-3"
            style={{ borderRadius: '28px' }}
        >
            {/* Experience Header */}
            <div className="flex items-center gap-3 mb-5">
                <h3 className="text-base font-semibold text-gray-900">{experience.company}</h3>
                <span
                    className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium"
                    style={{ borderRadius: '999px' }}
                >
                    {formatExperiencePeriod(experience)}
                </span>
                <span className="text-xs text-gray-400 ml-auto">{experience.title}</span>
            </div>

            <p className="text-sm text-gray-500 mb-5 leading-relaxed">{experience.summary}</p>

            {/* 대표 프로젝트 */}
            <ProjectCard project={representativeProject} />

            {/* 더보기 링크 */}
            {totalProjects > 1 && (
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-1 mt-4 text-xs text-gray-400 hover:text-gray-900 transition-colors font-medium"
                >
                    +{totalProjects - 1}개 프로젝트 더보기 →
                </Link>
            )}
        </div>
    );
}
