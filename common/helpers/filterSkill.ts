import { Skill } from '@/payload/payload-types';

import { initialFilterState } from '@/context/filter/filter';

import { skillCategory } from '../types/skill';
import { haveCommonValue } from './haveCommonValue';

const filterSkill = (skills: Skill[], filterObj: initialFilterState): Skill[] => {
  const { category, keyword } = filterObj;

  const newList: Skill[] = [];

  if (category.length === 0 && !keyword) {
    return skills;
  } else if (category.length === 0 && keyword) {
    skills.forEach((skill, index) => {
      if (skill.title?.toLowerCase().includes(keyword.toLowerCase())) {
        newList.push(skill);
      }
    });
  } else {
    skills.forEach((skill, index) => {
      if (
        skill.title?.toLowerCase().includes(keyword.toLowerCase()) &&
        haveCommonValue(skill.category as { title: skillCategory }[], category, 'title')
      ) {
        newList.push(skill);
      }
    });
  }
  return newList;
};

export default filterSkill;
