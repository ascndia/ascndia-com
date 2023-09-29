import {
  BiEditAlt as BlogIcon,
  BiEnvelope as ContactIcon,
  BiCategoryAlt as DashboardIcon,
  BiHomeSmile as HomeIcon,
  BiBookBookmark as LearnIcon,
  BiLeaf as ProfileIcon,
  BiArchive as ProjectIcon,
  BiAt as ThreadsIcon
} from 'react-icons/bi';

import {
  BsStack as SkillIcon
} from 'react-icons/bs'

import { LuWorkflow as RoadmapIcon } from 'react-icons/lu';

const iconSize = 30

export const NAVIGATE_ITEM = [
  {
    title:'Project',
    href:'/projects',
    icon: <ProjectIcon size={iconSize}/>,
    isShow:true
  },
  {
    title:'About',
    href:'/about',
    icon: <ProfileIcon size={iconSize}/>,
    isShow:true
  },
  {
    title:'Skill',
    href:'/skill',
    icon: <SkillIcon size={iconSize}/>,
    isShow:true
  },
  {
    title:'Roadmap',
    href:'/roadmap',
    icon: <RoadmapIcon size={iconSize}/>,
    isShow:true
  },
  {
    title:'Dashboard',
    href:'/dashboard',
    icon: <DashboardIcon size={iconSize}/>,
    isShow:true
  }
];
