
import Link from 'next/link';
import { getAllProjectData } from '@/app/lib/api';
import ArticleLayout from '@/app/components/layouts/ArticleLayout';

export default function Project(){
  const projects = getAllProjectData();

  return (
    <ArticleLayout articleTitle="PROJECTS">
      
      {projects.map((project) => (
        <div key={project.projectId}>
          <Link as={`/pages/projects/${project.projectName}`}
                href={`/${project.projectName}`}
                style={{display:"block"}}>
            <div>
              title : {project.projectName}                              
            </div>
          </Link>
        </div>
      ))}
    </ArticleLayout>
  )
} 