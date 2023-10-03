import React from 'react';
import { SKILL_INTERFACE } from '@/common/types/skill';
import Tooltip from '@/common/components/elements/Tooltip';
import Image from 'next/image';


export default function SkillCard({ title, info, icon }: SKILL_INTERFACE) {
  return (
    <div className="w-8 h-8 flex justify-center items-center">
      <Tooltip title={title}>
        <Image alt={title} height={32} width={32} src={icon}/>
      </Tooltip>
    </div>
  );
}