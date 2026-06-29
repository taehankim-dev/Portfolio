import type { ProjectFrontmatter } from '@/types/project';
import { ProjectCard } from './ProjectCard';

interface ProjectListProps {
    projects: ProjectFrontmatter[];
    variant?: 'default' | 'simple';
}

export function ProjectList({ projects, variant = 'default' }: ProjectListProps) {
    const isSingle = projects.length === 1;

    return (
        <div className={isSingle ? 'grid grid-cols-1 gap-8 w-full' : 'grid grid-cols-1 md:grid-cols-2 gap-8'}>
            {projects.map(project => (
                <ProjectCard key={project.slug} project={project} variant={variant} />
            ))}
        </div>
    );
}
