import { Metadata } from 'next';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { METADATA } from '@/common/constant/metadata';

import BlogList from './_module/components/BlogList';

export const metadata: Metadata = {
  title: `My Blogs`,
  description: 'Personal Blogs of Ascndia',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL
  },
  openGraph: {
    title: `${METADATA.creator} Blogs`,
    description: 'Welcome to my blog, where I share my thoughts and insights.',
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://ascndia.com'}/blogs`,
    siteName: METADATA.siteName,
    images: METADATA.image
  }
};

export default async function Blogs() {
  return (
    <Container data-aos="fade-up">
      <PageHeading title="Blog" description="Welcome to my blog, where I share my thoughts and insights." />
      <BlogList />
    </Container>
  );
}
