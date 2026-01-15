import type { ProjectFrontmatter } from '@/types/project';
import { ProjectCard } from './ProjectCard';

interface ProjectListProps {
    projects: ProjectFrontmatter[];
}

export function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map(project => (
                <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
    );
}
