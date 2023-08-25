'use client';

import Breakline from '@/app/common/components/elements/Breakline';
import Image from '@/app/common/components/elements/Image';
import MDXComponent from '@/app/common/components/elements/MDXComponent';
import { BlogDetailProps } from '@/app/common/types/blog';
import BlogHeader from './BlogHeader';

interface BlogDetail {
  blog: BlogDetailProps;
  pageViewCount: number;
}
export default function BlogDetail({ blog, pageViewCount }: BlogDetail) {
  const {
    cover_image,
    title,
    body_markdown,
    comments_count,
    published_at,
    tags,
    reading_time_minutes,
  } = blog;

  const defaultImage = '/placeholder.png';

  return (
    <>
      <BlogHeader
        title={title}
        comments_count={comments_count}
        reading_time_minutes={reading_time_minutes}
        published_at={published_at}
        page_views_count={pageViewCount}
      />
      <div className="space-y-6 leading-[1.8] dark:text-neutral-300 ">
        <Image
          src={cover_image ?? defaultImage}
          width={800}
          height={500}
          alt={title}
          className="hover:scale-105"
        />
        {body_markdown && <MDXComponent>{body_markdown}</MDXComponent>}
      </div>
      {tags?.length >= 1 && (
        <div className="my-10 space-y-2">
          <h6 className="text-lg font-medium">Tags:</h6>
          <div className="flex flex-wrap gap-2 pt-2">
            {tags?.map((stack: string, index: number) => (
              <span
                key={index}
                className="bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-200 rounded-full px-4 py-1 text-[14px] font-medium"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      )}
      <Breakline className="!my-10" />
    </>
  );
}
