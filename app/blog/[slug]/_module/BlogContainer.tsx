import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import { FiArrowLeftCircle as BackIcon } from 'react-icons/fi';

import Breakline from '@/common/components/elements/Breakline';
import PageHeading from '@/common/components/elements/PageHeading2';
import { BlogPost } from '@/common/types/blog';

import MarkdownContainer from './MarkdownContainer';

export default function BlogContainer({ postData }: { postData: BlogPost }) {
  return (
    <article className="duration-200">
      <Link href="/blog">
        <div className="flex group items-center duration-200 mb-2 gap-2">
          <BackIcon size={28} />
          <div className="group-hover:px-1 text-[18px] duration-200">Back</div>
        </div>
      </Link>
      <PageHeading title={postData.title} />
      <div className="flex gap-x-2 mt-2 text-neutral-700 duration-200 dark:text-neutral-300">
        <div>Published on : {postData.date}</div>
      </div>
      <div className="img-container  relative lg:-h-[420px] h-[260px] sm:h-[320px] md:h-[400px] overflow-hidden">
        <Image className="py-2" layout="fill" objectFit="cover" src={postData.image} alt={postData.title} />
      </div>

      <Breakline className="my-8" />
      <div className="text-neutral-700 text-lg font-sora dark:text-neutral-300 space-y-4">
        <MarkdownContainer postData={postData} />
      </div>
      <div className="flex mt-12 gap-5">
        {postData.tags.map((tag, index) => (
          <div
            key={index}
            className="hover:text-purple-500 cursor-pointer duration-200 dark:hover:text-purple-300 text-neutral-700 text-[17px] dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-600 rounded-full py-3 px-4"
          >
            {tag}
          </div>
        ))}
      </div>
    </article>
  );
}
