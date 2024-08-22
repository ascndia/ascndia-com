'use client';

import Link from 'next/link';

import { getSkills } from '@/fetch/data';
import { Skill } from '@/payload/payload-types';
import { ISkill } from '@/services/data/types';
import { useQuery } from '@tanstack/react-query';
import payload from 'payload';
import { useState } from 'react';
import { HiCode } from 'react-icons/hi';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { ApiResponse } from '@/common/types/api-types';

// import SkillCard from './SkillCard';
import SkillCard from './SkillCard';

export default async function Skills() {
  // const { data, error, isLoading } = useQuery<ApiResponse<Skill>>({
  //   queryKey: ['skills'],
  //   queryFn: getSkills
  // });
  const data = await payload.find({
    collection: 'skills',
    limit: 0
  });
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Skills" icon={<HiCode className="mr-1" />} />
        <SectionSubHeading>
          <div className="flex justify-between">
            <p className="dark:text-neutral-400">My coding skills.</p>
            <Link className="hover:dark:text-neutral-300" href={'/skill'}>
              See full List
            </Link>
          </div>
        </SectionSubHeading>
      </div>
      <div className="flex flex-wrap gap-6">
        <SkillList skills={data?.docs?.filter(skill => skill.showInDashboard) as Skill[]} />
      </div>
    </section>
  );
}

const SkillList = ({ skills }: { skills: Skill[] }) => {
  return skills?.map((skill, index) => <SkillCard key={index} {...skill} />);
};
