import { Metadata } from 'next';

import React from 'react';

import Container from '@/common/components/elements/Container';
import { METADATA } from '@/common/constant/metadata';

import Projects from '@/modules/project';

export const metadata: Metadata = {
  title: `${METADATA.creator} | Projects`,
  alternates: {
    canonical: process.env.DOMAIN
  }
};

function page() {
  return (
    <Container data-aos="fade-up">
      <Projects />
    </Container>
  );
}

export default page;
