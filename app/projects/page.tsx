import { Metadata } from 'next';

import Projects from '@/app/projects/_module';
import React from 'react';

import Container from '@/common/components/elements/Container';
import { METADATA } from '@/common/constant/metadata';

export const metadata: Metadata = {
  title: `${METADATA.creator} Projects`,
  description: 'Showcasing my passion for technology, design, and problem-solving through code.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://ascndia.com'}`
  },
  openGraph: {
    title: `${METADATA.creator} Projects`,
    description: 'Showcasing my passion for technology, design, and problem-solving through code.',
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://ascndia.com'}/projects`,
    siteName: METADATA.siteName,
    images: METADATA.image
  }
};
// Delivering Expert Solutions with Care and Creative Ingenuity for Exceptional Digital Experiences.
function page() {
  return (
    <Container data-aos="fade-up">
      <Projects />
    </Container>
  );
}

export default page;
