import { IProject, IService, ISkill } from '@/services/data/types';

export const getSkills = (): Promise<ISkill[]> => {
  return fetch('/data/skills.json').then(res => res.json());
};
export const getServices = (): Promise<IService[]> => {
  return fetch('/data/services.json').then(res => res.json());
};

export const getProjects = (): Promise<IProject[]> => {
  return fetch('/data/projects.json').then(res => res.json());
};
