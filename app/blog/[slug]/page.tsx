import { Metadata } from 'next';

import React from 'react';

import Container from '@/common/components/elements/Container';
import { getBlogs } from '@/common/libs/fetch/data';

import BlogPostPage from './_module';

// export async function generateMetadata(blogData: BlogPost): Promise<Metadata> {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ascndia.com';
//   const url = `${baseUrl}/blog/${blogData.slug}`;
//   return {
//     title: blogData.title,
//     description: blogData.description,
//     authors: { name: blogData.author },
//     openGraph: {
//       title: blogData.title,
//       description: blogData.description,
//       authors: blogData.author,
//       url: new URL(url),
//       images: blogData.image
//     },
//     twitter: {
//       title: blogData.title,
//       description: blogData.description,
//       creator: blogData.author,
//       images: blogData.image,
//       site: baseUrl
//     }
//   };
// }

export default async function page({ params }: { params: { slug: string } }) {
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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blogData = await getBlogs().then(blogs => blogs.find(blog => blog.slug === params.slug));

  if (!blogData) {
    return {
      title: 'Blog Post Not Found',
      description: 'The blog post you are looking for does not exist.'
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ascndia.com';
  const url = `${baseUrl}/blog/${blogData.slug}`;

  return {
    title: blogData.title,
    description: blogData.description,
    authors: { name: blogData.author },
    openGraph: {
      title: blogData.title,
      description: blogData.description,
      authors: [blogData.author],
      url,
      images: [
        {
          url: blogData.image,
          alt: blogData.title
        }
      ]
    },
    twitter: {
      title: blogData.title,
      description: blogData.description,
      creator: blogData.author,
      images: [blogData.image],
      site: baseUrl,
      card: 'summary_large_image'
    }
  };
}
