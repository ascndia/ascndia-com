import Link from 'next/link';

import { TbCoffee } from 'react-icons/tb';
import Typewriter from 'typewriter-effect';

import { SAWERIA_URL } from '@/common/constant';

import Name from './Name';

export default function Introduction() {
  return (
    <section className="bg-cover bg-no-repeat space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
          <h1>
            Hi, I&apos;m <Name />
          </h1>{' '}
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <Link href={SAWERIA_URL} target="_blank" aria-label="buy-me-cofey">
          <TbCoffee size={25} />
        </Link>
      </div>

      <div className="space-y-4">
        <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
          <li>Software Engineer</li>
          <li>Student</li>
          <li>
            Based in Surabaya <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300">
          Passionate and seasoned Software Engineer with a strong focus on backend development. Proficient in Typescript
          and well-versed in all aspects of software development. Collaborative team player dedicated to delivering
          efficient, scalable, and visually appealing solutions.
        </p>
      </div>
    </section>
  );
}
