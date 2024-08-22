import { BlogPost } from '@/common/types/blog';
import { IProject, IService, ISkill } from '@/common/types/data/types';

export const getSkills = (): Promise<ISkill[]> => {
  return fetch('https://raw.githubusercontent.com/ascndia/data/master/json/skills.json').then(res => res.json());
};
export const getServices = (): Promise<IService[]> => {
  return fetch('https://raw.githubusercontent.com/ascndia/data/master/json/services.json').then(res => res.json());
};

export const getProjects = (): Promise<IProject[]> => {
  return fetch('https://raw.githubusercontent.com/ascndia/data/master/json/projects.json').then(res => res.json());
};
export async function getBlogs(): Promise<BlogPost[]> {
  const res = await fetch('https://raw.githubusercontent.com/ascndia/data/master/json/blogs.json');
  if (!res.ok) {
    throw new Error('Failed to fetch blog list');
  }
  const blogList: BlogPost[] = await res.json();
  return blogList;
}
