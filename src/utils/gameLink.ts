import { projects } from "../data/projects";

const slugByTitle = new Map(projects.map((project) => [project.title, project.slug]));

// Every game in projects.ts (active or archived) has its own detail page.
// Titles not registered there fall back to the projects index.
export const getGameHref = (title: string): string => {
  const slug = slugByTitle.get(title);
  return slug ? `/projects/${slug}` : "/projects";
};
