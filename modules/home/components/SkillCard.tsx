import Image from 'next/image';

import { ISkill } from '@/services/data/types';
import React from 'react';

import Tooltip from '@/common/components/elements/Tooltip';

export default function SkillCard({ title, info, icon }: ISkill) {
  return (
    <div className="w-8 h-8 flex justify-center items-center">
      <Tooltip title={title}>
        <Image alt={title} height={32} width={32} src={icon} />
      </Tooltip>
    </div>
  );
}
