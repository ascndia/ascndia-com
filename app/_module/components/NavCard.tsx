import { differenceInMonths, differenceInYears, format } from 'date-fns';
import { BsBuildings as CompanyIcon } from 'react-icons/bs';
import Link from 'next/link';
import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import { NavProps } from '@/common/types/careers';
import Breakline from '@/common/components/elements/Breakline';

export default function NavCard({ title, href, icon }: NavProps) {

  return (
    <Link href={href}>
      <Card className="flex items-center gap-5 py-4 px-6 border border-neutral-300 hover:bg-neutral-100  dark:border-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700">
        {icon}
        <div className="space-y-1">
          <h2 className='text-xl'>{title}</h2>
        </div>
      </Card>
    </Link>
  );
}
