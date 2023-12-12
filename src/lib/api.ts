import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import markdownToHtml from "./markdownToHtml";

const projectsDir = join(process.cwd(), '_projects');

// export const getAllProjectData = () => {
//   const projects = readdirSync(projectsDir).map((file) => {
//     const project = readFileSync(`${projectsDir}/${file}`, 'utf-8');
//     return {
//       data: matter(project).data,
//       content: matter(project).content
//     }
//   })

//   return projects;
// }

// export const getProjectDetailData = async(
//   slug: string,
//   projectName: string,
//   fields: string[] = []
// ) => {
//   const project = readFileSync(`_projects/${projectName}.md`, 'utf-8');
//   const { data, content } = matter(project);

  // return { 
  //   meta: data,
  //   content: await markdownToHtml(content)
  // }
// }

export const getAllProjects = (
  fields: string[] = []
) => {
  const projects = readdirSync(projectsDir).map((file) => {
    const project = readFileSync(`${projectsDir}/${file}`, 'utf-8');
    return {
      data: matter(project).data,
      content: matter(project).content
    }
  })
  
  return projects;
}

export const getProjectBySlug = (
  slug: string,
  projectName: string,
  fields: string[] = []
) => {

  console.log(projectName, "prjName")
  const projectMdFile = readFileSync(`_projects/${projectName}.md`, 'utf-8');
  const { data, content } = matter(projectMdFile);

  type Items = {
    [key: string]: string
  }

  const items: Items = {};
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug.split(".md")[0];
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}