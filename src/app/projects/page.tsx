import type { Metadata } from 'next';
import { getProjectsByExperience } from '@/lib/projects';
import { ExperienceSection } from '@/components/projects/ExperienceSection';

export const metadata: Metadata = {
    title: '프로젝트 | 4년차 백엔드 개발자 김태한의 포트폴리오',
    description: '재직 경험별 프로젝트 케이스 스터디',
};

export default function ProjectsPage() {
    const experienceGroups = getProjectsByExperience();

    return (
        <div className="space-y-4">
            {/* Page Header */}
            <div
                className="bg-white px-8 py-10"
                style={{ borderRadius: '28px' }}
            >
                <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">프로젝트</h1>
                <p className="text-sm text-gray-500">
                    재직 경험별로 구성된 프로젝트 케이스 스터디
                </p>
            </div>

            {/* Experience Sections */}
            <div className="space-y-3">
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
