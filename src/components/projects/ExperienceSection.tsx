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
        <section
            className="bg-white p-7"
            style={{ borderRadius: '28px' }}
        >
            {/* Experience Header */}
            <div className="flex items-center gap-3 mb-6">
                <h2 className="text-base font-semibold text-gray-900">{experience.company}</h2>
                <span
                    className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium"
                    style={{ borderRadius: '999px' }}
                >
                    {formatExperiencePeriod(experience)}
                </span>
                <span className="text-xs text-gray-400 ml-auto">{experience.title}</span>
            </div>

            {experience.summary && (
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">{experience.summary}</p>
            )}

            {/* Projects Grid */}
            <ProjectList projects={projects} />
        </section>
    );
}
