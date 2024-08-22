'use client';

import Link from 'next/link';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { HiCode } from 'react-icons/hi';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { getSkills } from '@/common/libs/fetch/data';
import { ISkill } from '@/common/types/data/types';

// import SkillCard from './SkillCard';
import SkillCard from './SkillCard';

export default function Skills() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['skills'],
    queryFn: getSkills
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
        <SkillList skills={data?.filter((skill: ISkill) => skill.isShowInDashboard) as ISkill[]} />
      </div>
    </section>
  );
}

const SkillList = ({ skills }: { skills: ISkill[] }) => {
  return skills?.map((skill, index) => <SkillCard key={index} {...skill} />);
};
