'use client'

import { RootState } from '@/context/filter/store'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SKILLS } from '@/common/constant/skill'
import filterSkill from '@/common/helpers/filterSkill'
import SkillCard from './SkillCard'

function SkillList() {
  
  const filterObj = useSelector((state:RootState) => state.filter)
  const [filteredSkills,setFilteredSkills] = useState(SKILLS.filter(skill => skill.isShow))

  useEffect(() => {
    setFilteredSkills(filterSkill(SKILLS,filterObj));
  },[filterObj])

  return (
    <div className='grid grid-cols-5 lg:grid-cols-12 gap-6 pt-3'>
      {
        filteredSkills.map((skill,index) => (
          <SkillCard key={index} {...skill}/>
        ))
      }
    </div>
  )
}

export default SkillList