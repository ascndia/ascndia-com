import { IProject, IService, ISkill } from '@/services/data/types';

export const getSkills = (): Promise<any> => {
  return fetch('/api/skills?limit=0').then(res => res.json());
};
export const getServices = (): Promise<any> => {
  return fetch('/api/services?limit=0 ').then(res => res.json());
};

export const getProjects = (): Promise<any> => {
  return fetch('/api/projects?limit=0').then(res => res.json());
};
