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
        <div className="mb-12">
            {/* Experience Header */}
            <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="text-xl font-semibold text-gray-900">{experience.company}</h3>
                    <span className="text-sm text-gray-500">
                        {formatExperiencePeriod(experience)}
                    </span>
                </div>
                <p className="text-gray-600 text-sm">{experience.summary}</p>
            </div>

            {/* 대표 프로젝트 */}
            <ProjectCard project={representativeProject} />

            {/* 더보기 링크 */}
            {totalProjects > 1 && (
                <Link
                    href="/projects"
                    className="inline-block mt-4 text-sm text-blue-600 hover:underline"
                >
                    +{totalProjects - 1}개 프로젝트 더보기 →
                </Link>
            )}
        </div>
    );
}
