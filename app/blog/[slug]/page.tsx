import React from 'react';

import Container from '@/common/components/elements/Container';
import { getBlogs } from '@/common/libs/fetch/data';

import BlogPostPage from './_module';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}
export default function page({ params }: BlogPostPageProps) {
  return (
    <Container data-aos="fade-up">
      <BlogPostPage params={params} />
    </Container>
  );
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map(blog => ({ slug: blog.slug }));
}

export const dynamicParams = true; // true | false,
