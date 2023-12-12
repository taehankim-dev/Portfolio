import ArticleLayout from '@/app/container/ArticleLayout';
// import { getAllProjectData } from '@/lib/api';
import { getAllProjects } from '@/lib/api'
import Project from './project/page';
import Link from 'next/link';

import ReactMarkDown from 'react-markdown'

const customComponent = {
  p({...props}){
    return(
      <p>{props.children}</p>
    )
  },
  h1({...props}){
    return(
      <h1>{props.children}</h1>
    )
  },
  h2({...props}){
    return(
      <h2>{props.children}</h2>
    )
  },
  pre({...props}){
    return(
      <></>
    )
  }
}

export default function Projects(){
  const allProjects = getAllProjects();
  return (
    <ArticleLayout articleTitle="PROJECTS">
      {allProjects.map(project => (
        <div key={project.data.projectId}>
          {/* <div dangerouslySetInnerHTML={{__html: project.content}} /> */}
          <ReactMarkDown components={customComponent}>
            {project.content}
          </ReactMarkDown>
        </div>
      ))}
      <Project />
      {/* {projectData.map((project) => (
        <div key={project.data.projectId}>
          <Link href={`/pages/projects/DiaryProject`}>
          {project.data.projectName}
          </Link>
          {project.content}
          <span>123</span>
        </div>
      ))} */}
    </ArticleLayout>
  )
} 