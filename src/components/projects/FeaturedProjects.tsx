import { getFeaturedProjects } from '@/lib/projects';
import { ProjectList } from './ProjectList';

export function FeaturedProjects() {
    const featured = getFeaturedProjects();

    return (
        <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">대표 프로젝트</h2>
            <ProjectList projects={featured} />
        </section>
    );
}
