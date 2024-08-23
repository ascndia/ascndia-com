import { Metadata } from 'next';

import React from 'react';

import Container from '@/common/components/elements/Container';
import { METADATA } from '@/common/constant/metadata';

import Services from './_module';

export const metadata: Metadata = {
  title: `${METADATA.creator} Services`,
  description: 'Services of Ascndia',
  alternates: {
    canonical: process.env.DOMAIN
  },
  openGraph: {
    title: `${METADATA.creator} Services`,
    description: 'Delivering Expert Solutions with Care and Creative Ingenuity for Exceptional Digital Experiences.',
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://ascndia.com'}/service`,
    siteName: METADATA.siteName,
    images: METADATA.image
  }
};

function page() {
  return (
    <Container data-aos="fade-up">
      <Services />
    </Container>
  );
}

export default page;
