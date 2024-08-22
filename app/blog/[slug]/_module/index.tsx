'use client';

import { BlogNotFound } from '@/app/not-found';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { getBlogs } from '@/common/libs/fetch/data';
import { fetchAndParseMarkdown } from '@/common/libs/markdown';
import { BlogPost } from '@/common/types/blog';

import BlogContainer from './BlogContainer';
import Loading from './Loading';

async function getBlogPost(slug: string): Promise<BlogPost> {
  const posts = await getBlogs();
  const post = posts.find(post => post.slug === slug);

  if (!post) {
    throw new Error('Post not found');
  }

  const postData = await fetchAndParseMarkdown(post);
  return postData;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { data, isLoading } = useQuery<BlogPost>({
    queryKey: ['blog', params.slug],
    queryFn: () => getBlogPost(params.slug)
  });

  const [postData, setPostData] = useState<BlogPost | undefined>(undefined);
  useEffect(() => {
    setPostData(data);
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (!postData) {
    return <BlogNotFound />;
  }

  return <BlogContainer postData={postData as BlogPost} />;
}
