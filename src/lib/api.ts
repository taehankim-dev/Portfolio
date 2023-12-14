import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";

const projectsDir = join(process.cwd(), '_projects');
const simpleProjectDir = join(process.cwd(), '_projects/simple');
const detailProjectDir = join(process.cwd(), '_projects/detail');

export const getAllSimpleProjects = (
  fields: string[] = []
) => {
  const projects = readdirSync(simpleProjectDir).map((file) => {
    const project = readFileSync(`${simpleProjectDir}/${file}`, 'utf-8');
    return {
      data: matter(project).data,
      content: matter(project).content
    }
  })
  
  return projects;
}

export const getSimpleProjectBySlug = (
  slug: string,
  projectName: string,
  fields: string[] = []
) => {
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