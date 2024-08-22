import { IProject, IService, ISkill } from '@/services/data/types';

export const getSkills = (): Promise<ISkill[]> => {
  return fetch('https://raw.githubusercontent.com/ascndia/data/master/json/skills.json').then(res => res.json());
};
export const getServices = (): Promise<IService[]> => {
  return fetch('https://raw.githubusercontent.com/ascndia/data/master/json/services.json').then(res => res.json());
};

export const getProjects = (): Promise<IProject[]> => {
  return fetch('https://raw.githubusercontent.com/ascndia/data/master/json/projects.json').then(res => res.json());
};
