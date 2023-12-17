import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";

const projectsDir = join(process.cwd(), '_projects');
const simpleProjectDir = join(process.cwd(), '_projects/simple');
const detailProjectDir = join(process.cwd(), '_projects/detail');

export const getAllSimpleProjects = (
  fields: string[] = []
) => {
  const slugs = readdirSync(simpleProjectDir);
  const projects = slugs.map((slug) => getSimpleProjectBySlug(slug, fields))
                        .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))

  return projects;
}

export const getSimpleProjectBySlug = (
  slug: string,
  fields: string[] = [],
) => {
  const projectMdFile = readFileSync(`${simpleProjectDir}/${slug}`, 'utf-8');
  const { data, content } = matter(projectMdFile);

  return {data, content};
}