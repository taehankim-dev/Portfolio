import type { Metadata } from 'next';
import { getProjectsByExperience } from '@/lib/projects';
import { ExperienceSection } from '@/components/projects/ExperienceSection';

export const metadata: Metadata = {
    title: '프로젝트 | 4년차 웹 개발자 포트폴리오',
    description: '재직 경험별 프로젝트 케이스 스터디',
};

export default function ProjectsPage() {
    const experienceGroups = getProjectsByExperience();

    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-3 text-gray-900">프로젝트</h1>
                <p className="text-gray-600">
                    재직 경험별로 구성된 프로젝트 케이스 스터디
                </p>
            </div>

            {/* Experience Sections */}
            <div>
                {experienceGroups.map(({ experience, projects }) => (
                    <ExperienceSection
                        key={experience.id}
                        experience={experience}
                        projects={projects}
                    />
                ))}
            </div>
        </div>
    );
}
