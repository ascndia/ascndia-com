import { SKILL_INTERFACE } from '@/common/types/skill'
import Image from 'next/image'
import React from 'react'
import Tooltip from './Tooltip'

function SkillCard({title, info ,icon,category,mastery,usage}:SKILL_INTERFACE) {
  return (
    <Tooltip title={title} info={info} icon={icon} category={category} usage={usage} mastery={mastery}>
        <div className='w-10 h-10 flex items-center justify-center'>
            <Image src={icon} alt={title} height={40} width={40}/>
        </div>
    </Tooltip>
  )
}

export default SkillCard