"use client"

import React from 'react'
import SkillHeader from './SkillHeader'
import Breakline from '@/common/components/elements/Breakline'
import SkillList from './SkillList'
import { Provider } from 'react-redux'
import skillStore from '@/context/skills/store'

function Skills() {
  return (
    <Provider store={skillStore}>
        <SkillHeader/>
        <Breakline/>
        <SkillList/>
    </Provider>
  )
}

export default Skills