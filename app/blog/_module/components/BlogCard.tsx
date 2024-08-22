import Link from 'next/link';

import { useTheme } from 'next-themes';
import React from 'react';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import Tooltip from '@/common/components/elements/Tooltip';
import { BlogPost } from '@/common/types/blog';
import { IProject } from '@/common/types/data/types';

import useIsMobile from '@/hooks/useIsMobile';

export default function BlogCard(blog: BlogPost) {
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const trimmedContent = blog.description.slice(0, 70) + (blog.description.length > 70 ? '...' : '');
  return (
    <Link href={`/blog/${blog.slug}`}>
      <Card className="relative !shadow-none overflow-hidden hover:scale-[101.5%] cursor-pointer">
        {
          // !isMobile &&
          <div className="relative w-full h-48">
            <Image
              src={blog.image}
              fill={true}
              alt={blog.title}
              unoptimized
              className="rounded-xl h-full lg:h-48 object-cover object-left"
            />
          </div>
        }

        <div className="py-3 space-y-2 ">
          <div className="flex gap-2 items-center justify-start">
            <div className="flex gap-3">
              {blog.tags.map((tag, index) => (
                <div
                  className="hover:text-purple-500 duration-200 dark:hover:text-purple-500 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 px-2 py-1 text-sm rounded-md"
                  key={index}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 justify-start">
            <h3 className="text-lg font-sora cursor-pointer text-neutral-700 dark:text-white lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300">
              {blog.title}
            </h3>
          </div>
          <p className="text-neutral-700 dark:text-neutral-400 text-[15px] leading-relaxed">{trimmedContent} </p>
        </div>
        {/* <div className="flex items-center font-thin text-sm dark:text-neutral-200 text-neutral-600">{blog.date}</div> */}
      </Card>
    </Link>
  );
}
