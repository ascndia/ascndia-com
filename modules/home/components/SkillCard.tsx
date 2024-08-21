import Image from 'next/image';

import { Skill } from '@/payload/payload-types';
import { ISkill } from '@/services/data/types';
import React from 'react';

import Tooltip from '@/common/components/elements/Tooltip';

export default function SkillCard({ title, description, src }: Skill) {
  return (
    <div className="w-8 h-8 flex justify-center items-center">
      <Tooltip title={title as string}>
        <Image alt={title as string} height={32} width={32} src={src as string} />
      </Tooltip>
    </div>
  );
}
