import Link from 'next/link';
import { getProjectsByExperience } from '@/lib/projects';
import { getRepresentativeProject } from '@/lib/home-helpers';
import { ExperienceHighlight } from '@/components/home/ExperienceHighlight';

export default function HomePage() {
    const experienceGroups = getProjectsByExperience();

    return (
        <div className="max-w-4xl mx-auto">
            {/* 1. Hero Section - 개인 정체성 선언 */}
            <section className="text-center py-24 max-w-3xl mx-auto">
                <h1 className="text-5xl font-bold mb-4 text-gray-900">
                    김태한
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                    4년차 웹 개발자
                </p>
                <p className="text-gray-700 mb-2 leading-relaxed text-lg">
                    배포 후에도 안정성을 유지하는 구조 설계와, 팀이 이해할 수 있는 코드를 작성하는 개발자
                </p>
                <p className="text-gray-600 mb-10 leading-relaxed">
                    운영 중 발생한 문제를 임시방편이 아닌 아키텍처 수정으로 해결합니다
                </p>

                <div className="flex gap-4 justify-center">
                    <Link
                        href="/projects"
                        className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                    >
                        프로젝트 보기 →
                    </Link>
                    <a
                        href="#"
                        // href="/김태한 이력서.pdf"
                        // download="김태한 이력서.pdf"
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors text-sm font-medium"
                    >
                        이력서 다운로드
                    </a>
                </div>
            </section>

            {/* 2. Experience Highlights */}
            <section className="mb-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">경력</h2>

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

            {/* 3. Tech Stack - 역할별 분류 */}
            <section className="mb-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">기술 스택</h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">주력 기술</h3>
                        <p className="text-gray-600 leading-relaxed mb-3">
                            풀스택 환경에서 설계부터 배포까지 담당했습니다.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Next.js</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Vue 3</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">TypeScript</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Spring Boot</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">PostgreSQL</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">보조 경험</h3>
                        <p className="text-gray-600 leading-relaxed mb-3">
                            프로젝트 요구사항에 따라 선택적으로 활용했습니다.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded text-sm">Tailwind CSS</span>
                            <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded text-sm">Capacitor</span>
                            <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded text-sm">Node.js</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">운영·인프라 경험</h3>
                        <p className="text-gray-600 leading-relaxed mb-3">
                            실제 운영 환경에서 배포·모니터링·데이터 수집을 담당했습니다.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded text-sm">Docker</span>
                            <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded text-sm">Nginx</span>
                            <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded text-sm">MQTT</span>
                            <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded text-sm">pm2</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
