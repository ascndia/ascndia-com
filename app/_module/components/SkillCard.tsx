import Image from 'next/image';

import React from 'react';

import Tooltip from '@/common/components/elements/Tooltip';
import { ISkill } from '@/common/types/data/types';

export default function SkillCard({ title, info, icon }: ISkill) {
  return (
    <div className="w-8 h-8 flex justify-center items-center">
      <Tooltip title={title}>
        <Image alt={title} height={32} width={32} src={icon} />
      </Tooltip>
    </div>
  );
}
