import Link from 'next/link';

import { IProject } from '@/services/data/types';
import { useTheme } from 'next-themes';
import React from 'react';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import Tooltip from '@/common/components/elements/Tooltip';

import useIsMobile from '@/hooks/useIsMobile';

export default function ProjectCard({ title, stack, images, description, slug }: IProject) {
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const trimmedContent = description.slice(0, 70) + (description.length > 70 ? '...' : '');
  return (
    <Link href={`/projects/${slug}`}>
      <Card className="relative border overflow-hidden dark:bg-neutral-800 border-neutral-200 dark:border-neutral-800 hover:scale-[101%] cursor-pointer">
        {
          // !isMobile &&
          <div className="relative w-full h-48">
            <Image
              src={images[0]}
              fill={true}
              alt={title}
              unoptimized
              className="rounded-t-xl h-full lg:h-48 object-cover object-left"
            />
          </div>
        }

        <div className="p-5 space-y-2">
          <div className="flex items-center gap-2 justify-start">
            <h3 className="text-lg font-sora cursor-pointer text-neutral-700 dark:text-neutral-200 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300">
              {title}
            </h3>
          </div>
          <p className="text-neutral-700 dark:text-neutral-400 text-[15px] leading-relaxed">{trimmedContent}</p>
          <div className="flex gap-4 !mt-4">
            {stack.map((item, index) => (
              <Tooltip key={index} title={item.title}>
                <Image key={index} src={item.src} alt={title} width={22} height={22} />
              </Tooltip>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
