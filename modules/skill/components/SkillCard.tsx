import Image from 'next/image';

import { ISkill } from '@/services/data/types';
import React from 'react';

import Tooltip from './Tooltip';

function SkillCard({ title, info, icon, category, mastery, usage }: ISkill) {
  return (
    <Tooltip title={title} info={info} icon={icon} category={category} usage={usage} mastery={mastery}>
      <div className="w-10 h-10 flex items-center justify-center">
        <Image src={icon} alt={title} height={40} width={40} />
      </div>
    </Tooltip>
  );
}

export default SkillCard;
