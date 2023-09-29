import React from 'react'
import SearchBar from './SearchBar'
import Filter from './Filter'
import SectionHeading from '@/common/components/elements/SectionHeading'
import SectionSubHeading from '@/common/components/elements/SectionSubHeading'
import { BsStack as SkillIcon} from 'react-icons/bs'
import PageHeading from '@/common/components/elements/PageHeading2'

function SkillHeader() {
  return (
    <section className='space-y-2'>
      <PageHeading title="My Skills" />
      <div className='space-y-4'>
        <SearchBar/>
        <Filter/>
      </div>
    </section>
  )
}

export default SkillHeader