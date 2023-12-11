import ArticleLayout from '@/app/container/ArticleLayout';
import { getAllProjectData } from '@/lib/api';
import Project from './project/page';
import Link from 'next/link';


export default function Projects(){
  const projectData = getAllProjectData();
  return (
    <ArticleLayout articleTitle="PROJECTS">
      <Project projects={projectData}/>
      {projectData.map((project) => (
        <div key={project.data.projectId}>
          <Link href={`/pages/projects/DiaryProject`}>
          {project.data.projectName}
          </Link>
          {project.content}
          <span>123</span>
        </div>
      ))}
    </ArticleLayout>
  )
} 