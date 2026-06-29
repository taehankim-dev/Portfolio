import Link from 'next/link';
import { getProjectsByExperience } from '@/lib/projects';
import { getRepresentativeProject } from '@/lib/home-helpers';
import { ExperienceHighlight } from '@/components/home/ExperienceHighlight';
import { TechStack } from '@/components/home/TechStack';

export default function HomePage() {
    const experienceGroups = getProjectsByExperience();

    return (
        <div className="space-y-4">
            {/* 1. Hero Section */}
            <section
                className="bg-white text-center px-8 py-16 md:py-20"
                style={{ borderRadius: '28px' }}
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug md:leading-tight mb-5 tracking-tight break-keep">
                    운영 효율과 안정성 사이의<br />
                    <span className="text-gray-400">최적점을 찾는 소프트웨어 엔지니어.</span>
                </h1>

                <p className="text-gray-500 text-base mb-3 leading-relaxed max-w-xl mx-auto break-keep">
                    실사용 환경의 문제를 정의하고 기술적으로 해결하는 <br className="block sm:hidden" />소프트웨어 엔지니어입니다.
                </p>
                {/* <p className="text-gray-400 text-sm mb-2 leading-relaxed max-w-lg mx-auto break-keep">
                    초당 50건의 센서 데이터 유입으로 인한 HikariCP 커넥션 풀 고갈 문제를
                    아키텍처 분리와 Bulk Insert 도입으로 해결하며 시스템 가용성을 확보했습니다.
                </p>
                <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-lg mx-auto break-keep">
                    복잡한 비즈니스 로직을 '프리셋' 구조로 추상화하여 견적 업무 시간을 83% 단축하는 등,
                    운영 현장의 문제를 구조적으로 해결하는 데 집중합니다.
                </p> */}

                <div className="flex gap-3 justify-center flex-wrap">
                    <Link
                        href="/projects"
                        className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
                    >
                        프로젝트 보기 →
                    </Link>
                </div>
            </section>


            {/* 2. Experience Section */}
            <section>
                <div className="px-2 py-3 mb-2">
                    <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">경력</h2>
                </div>

                {experienceGroups
                    .filter(({ experience }) => experience.id !== 'others')
                    .map(({ experience, projects }) => {
                        const representative = getRepresentativeProject(projects);
                        if (!representative) return null;

                        return (
                            <ExperienceHighlight
                                key={experience.id}
                                experience={experience}
                                representativeProject={representative}
                                totalProjects={projects.length}
                            />
                        );
                    })}
            </section>

            {/* 3. Tech Stack Grid */}
            <section>
                <TechStack />
            </section>
        </div>
    );
}
