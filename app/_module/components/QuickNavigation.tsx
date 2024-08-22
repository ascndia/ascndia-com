import { AiOutlineCompass as CompassIcon } from 'react-icons/ai';
import SectionHeading from '@/common/components/elements/SectionHeading';
import { NAVIGATE_ITEM } from '@/common/constant/navigate';
const SHOW_NAVIGATE_ITEM = NAVIGATE_ITEM.filter(item => item.isShow)
import NavCard from './NavCard';

const RESUME_URL = 'https://res.cloudinary.com/dvlbwm8c1/image/upload/f_auto,q_auto/v1/codebayu/c7y1km2xd0sgvnvjlzyr';

export default function QuickNavigation() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Navigate quickly" icon={<CompassIcon className="mr-1" />} />
        {/* <SectionSubHeading>
          <p className="dark:text-neutral-400">Navigate quickly around website</p>
          <Link
            href={RESUME_URL}
            target="_blank"
            passHref
            className="flex gap-2 hover:gap-3 transition-all duration-300 items-center text-neutral-600 dark:text-neutral-500 hover:text-neutral-700 hover:dark:text-neutral-300"
            data-umami-event="Download Resume"
          >
            <DownloadIcon />
            <span>Download Resume</span>
          </Link>
        </SectionSubHeading> */}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {SHOW_NAVIGATE_ITEM?.map((item, index) => <NavCard key={index} {...item} />)}
      </div>
    </section>
  );
}
