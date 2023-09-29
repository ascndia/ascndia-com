import Tooltip from '@/common/components/elements/Tooltip'
import { SKILL_INTERFACE } from '@/common/constant/skill'
import Image from 'next/image'
import React from 'react'

function SkillCard({title,icon,category,mastery,usage}:SKILL_INTERFACE) {
  return (
    <Tooltip title={title}>
        <div className='w-10 h-10 flex items-center justify-center'>
            <Image src={icon} alt={title} height={40} width={40}/>
        </div>
    </Tooltip>
  )
}

export default SkillCard