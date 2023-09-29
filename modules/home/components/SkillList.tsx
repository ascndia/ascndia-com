import { HiCode } from 'react-icons/hi';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { SKILLS } from '@/common/constant/skill';

// import SkillCard from './SkillCard';
import SkillCard from './SkillCard';
import Link from 'next/link';

const FILTERED_SKILLS = SKILLS.filter(item => item.isShowInDashboard)

export default function SkillList() {

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Skills" icon={<HiCode className="mr-1" />} />
        <SectionSubHeading>
          <div className='flex justify-between'>
            <p className="dark:text-neutral-400">My coding skills.</p>
            <Link className='hover:dark:text-neutral-300' href={'/skill'}>See full List</Link>
          </div>
        </SectionSubHeading>
      </div>
      <div className="flex flex-wrap gap-6">
        {FILTERED_SKILLS?.map((skill, index) => <SkillCard key={index} {...skill} />)}
      </div>
    </section>
  );
}
