import ArticleLayout from '@/app/container/ArticleLayout';
import { getAllProjectData } from '@/lib/api';
import Project from './project/page';

export default function Projects(){
  const projectData = getAllProjectData();
  return (
    <ArticleLayout articleTitle="PROJECTS">
      {/* <Project projectData={projectData}/> */}
    </ArticleLayout>
  )
} 