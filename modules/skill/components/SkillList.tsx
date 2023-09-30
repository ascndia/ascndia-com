'use client'

import { RootState } from '@/context/skills/store'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SKILLS, SKILL_INTERFACE } from '@/common/constant/skill'
import filterSkill from '@/common/helpers/filterSkill'
import SkillCard from './SkillCard'


function SkillList() {
  
  const filterObj = useSelector((state:RootState) => state.filter)
  const [filteredSkills,setFilteredSkills] = useState(SKILLS.filter(skill => skill.isShow))

  useEffect(() => {
    setFilteredSkills(filterSkill(SKILLS,filterObj));
  },[filterObj])

  return (
    <div className='flex flex-wrap gap-6 pt-3 justify-between'>
      {
        filteredSkills.map((skill,index) => (
          <SkillCard key={index} {...skill}/>
        ))
      }
    </div>
  )
}

export default SkillList