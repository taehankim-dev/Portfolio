import type { Experience } from '@/types/experience';
import type { ProjectFrontmatter } from '@/types/project';
import { ProjectList } from './ProjectList';
import { formatExperiencePeriod } from '@/data/experiences';

interface ExperienceSectionProps {
    experience: Experience;
    projects: ProjectFrontmatter[];
}

export function ExperienceSection({ experience, projects }: ExperienceSectionProps) {
    if (projects.length === 0) return null;

    return (
        <section className="mb-16">
            {/* Experience Header */}
            <div className="mb-8 pb-4 border-b border-gray-200">
                <div className="flex items-baseline gap-4 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">{experience.company}</h2>
                    <span className="text-gray-500 text-sm">{formatExperiencePeriod(experience)}</span>
                </div>
                <p className="text-gray-600 text-sm">{experience.title}</p>
                <p className="text-gray-500 text-sm mt-1">{experience.summary}</p>
            </div>

            {/* Projects Grid */}
            <ProjectList projects={projects} />
        </section>
    );
}
