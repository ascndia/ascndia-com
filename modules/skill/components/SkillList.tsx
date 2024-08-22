// 'use client';
import { getSkills } from '@/fetch/data';
import { Skill } from '@/payload/payload-types';
import { useQuery } from '@tanstack/react-query';
import payload from 'payload';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import filterSkill from '@/common/helpers/filterSkill';
import { ApiResponse } from '@/common/types/api-types';

import { RootState } from '@/context/filter/store';

import SkillCard from './SkillCard';

async function SkillList() {
  const filterObj = useSelector((state: RootState) => state.filter);
  // const { data } = useQuery<ApiResponse<Skill>>({
  //   queryKey: ['skills'],
  //   queryFn: getSkills
  // });
  const data = await payload.find({
    collection: 'skills',
    limit: 0
  });
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(data?.docs?.filter(skill => skill.show) as Skill[]);
  useEffect(() => {
    setFilteredSkills(data?.docs?.filter((skill: Skill) => skill.show) as Skill[]);
  }, [data]);
  useEffect(() => {
    setFilteredSkills(filterSkill(data?.docs as Skill[], filterObj));
  }, [filterObj]);

  return (
    <div className="grid grid-cols-5 lg:grid-cols-12 gap-6 pt-3">
      {filteredSkills?.map((skill, index) => <SkillCard key={index} {...skill} />)}
    </div>
  );
}

export default SkillList;
