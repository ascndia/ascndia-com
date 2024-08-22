import { ISkill } from '@/common/types/data/types';

import { initialFilterState } from '@/context/filter/filter';

import { haveCommonValue } from './haveCommonValue';

const filterSkill = (skills: ISkill[], filterObj: initialFilterState): ISkill[] => {
  const { category, keyword } = filterObj;

  const newList: ISkill[] = [];

  if (category.length === 0 && !keyword) {
    return skills;
  } else if (category.length === 0 && keyword) {
    skills.forEach((skill, index) => {
      if (skill.title.toLowerCase().includes(keyword.toLowerCase())) {
        newList.push(skill);
      }
    });
  } else {
    skills.forEach((skill, index) => {
      if (skill.title.toLowerCase().includes(keyword.toLowerCase()) && haveCommonValue(skill.category, category)) {
        newList.push(skill);
      }
    });
  }
  return newList;
};

export default filterSkill;
