import Image from 'next/image';

import { Skill } from '@/payload/payload-types';
import { ISkill } from '@/services/data/types';
import React from 'react';

import { mastery, usage } from '@/common/types/skill';

import Tooltip from './Tooltip';

function SkillCard({ title, description, src, category, mastery, usage }: Skill) {
  return (
    <Tooltip
      title={title as string}
      info={description as string}
      icon={src as string}
      category={category as { title: string }[]}
      usage={usage as usage}
      mastery={mastery as mastery}
    >
      <div className="w-10 h-10 flex items-center justify-center">
        <Image src={src as string} alt={title as string} height={40} width={40} />
      </div>
    </Tooltip>
  );
}

export default SkillCard;
