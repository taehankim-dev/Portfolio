import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import markdownToHtml from "./markdownToHtml";

const projectsDir = join(process.cwd(), '_projects');

export const getAllProjectData = () => {
  const projects = readdirSync(projectsDir).map((file) => {
    const project = readFileSync(`${projectsDir}/${file}`, 'utf-8');
    return {
      data: matter(project).data,
      content: matter(project).content
    }
  })

  return projects;
}

export const getProjectDetailData = async(projectName: string) => {
  const project = readFileSync(`_projects/${projectName}.md`, 'utf-8');
  const { data, content } = matter(project);
  return { 
    meta: data,
    content: await markdownToHtml(content)
  }
}