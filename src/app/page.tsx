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
                    운영되는 서비스 환경에서 구조·성능·배포를 책임져온 개발자
                </p>
                <p className="text-gray-600 mb-10 leading-relaxed">
                    실무 문제 해결 경험을 케이스 스터디로 정리한 포트폴리오
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

            {/* 4. Impact - 문제 → 선택 → 결과 */}
            <section className="mb-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">주요 성과</h2>

                <div className="space-y-10">
                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-gray-900">
                            백엔드 분리로 API 응답 안정화
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-2">
                            <span className="font-medium text-gray-700">문제:</span> MQTT 데이터 수집과 웹 API가 같은 백엔드에서 동작하면서 센서 트래픽 증가 시 웹 화면이 느려지는 문제
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-2">
                            <span className="font-medium text-gray-700">선택:</span> MQTT 수집 전용 백엔드를 분리하고, 웹 API는 DB 조회만 담당하도록 아키텍처 재설계
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            <span className="font-medium text-gray-700">결과:</span> 센서 데이터 유입량과 무관하게 웹 제어 API 응답 속도 안정화
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-gray-900">
                            알림 상태 관리로 SMS 비용 절감
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-2">
                            <span className="font-medium text-gray-700">문제:</span> 임계값 초과 알림이 센서 데이터 수신마다 중복 발송되어 SMS 비용 증가
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-2">
                            <span className="font-medium text-gray-700">선택:</span> 알림 발송 상태를 DB에 저장하고, 상태 변경 시에만 발송하도록 로직 개선
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            <span className="font-medium text-gray-700">결과:</span> 중복 발송 방지로 문자 비용 절감 및 사용자 알림 피로도 감소
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-gray-900">
                            프리셋 구조로 견적 규칙 변경 유연화
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-2">
                            <span className="font-medium text-gray-700">문제:</span> 견적 항목과 계산 규칙이 지속적으로 변경되면서 코드 수정 및 배포 부담 증가
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-2">
                            <span className="font-medium text-gray-700">선택:</span> 견적 규칙을 코드가 아닌 데이터(프리셋)로 관리하는 구조로 재설계
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            <span className="font-medium text-gray-700">결과:</span> 견적 기준 변경 시 코드 수정 없이 프리셋 데이터만 수정하여 대응 가능
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
