import Link from 'next/link';

import { IService } from '@/services/data/types';
import { useTheme } from 'next-themes';
import React from 'react';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';

import useIsMobile from '@/hooks/useIsMobile';

export default function ServiceCard({ title, icon, image, description, slug }: IService) {
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const trimmedContent = description.slice(0, 70) + (description.length > 70 ? '...' : '');
  return (
    <Link href={`/projects/${slug}`}>
      <Card className="relative border overflow-hidden dark:bg-neutral-800 border-neutral-200 dark:border-neutral-800 hover:scale-[101%] cursor-pointer">
        {!isMobile && (
          <div className="relative w-full h-48">
            <Image
              src={image}
              fill={true}
              alt={title}
              unoptimized
              className="rounded-t-xl h-full lg:h-48 object-cover object-left"
            />
          </div>
        )}

        <div className="p-5 space-y-2">
          <div className="flex items-center gap-2 justify-start">
            {icon && (
              <Image
                style={{
                  filter: theme === 'dark' ? 'invert(1)' : 'invert(0)'
                }}
                src={icon}
                width={20}
                height={20}
                alt={title}
              />
            )}
            <h3 className="text-lg font-sora cursor-pointer text-neutral-700 dark:text-neutral-200 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300">
              {title}
            </h3>
          </div>
          <p className="text-neutral-700 dark:text-neutral-400 text-[15px] leading-relaxed">{trimmedContent}</p>
        </div>
      </Card>
    </Link>
  );
}
