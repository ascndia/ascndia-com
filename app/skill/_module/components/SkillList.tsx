'use client';

import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import filterSkill from '@/common/helpers/filterSkill';
import { getSkills } from '@/common/libs/fetch/data';
import { ISkill } from '@/common/types/data/types';

import { RootState } from '@/context/filter/store';

import SkillCard from './SkillCard';

function SkillList() {
  const filterObj = useSelector((state: RootState) => state.filter);
  const { data } = useQuery({
    queryKey: ['skills'],
    queryFn: getSkills
  });
  const [filteredSkills, setFilteredSkills] = useState<ISkill[]>(
    data?.filter((skill: ISkill) => skill.isShow) as ISkill[]
  );
  useEffect(() => {
    setFilteredSkills(data?.filter((skill: ISkill) => skill.isShow) as ISkill[]);
  }, [data]);
  useEffect(() => {
    setFilteredSkills(filterSkill(data as ISkill[], filterObj));
  }, [filterObj]);

  return (
    <div className="grid grid-cols-5 lg:grid-cols-12 gap-6 pt-3">
      {filteredSkills?.map((skill, index) => <SkillCard key={index} {...skill} />)}
    </div>
  );
}

export default SkillList;
