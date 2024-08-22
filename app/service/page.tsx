import { Metadata } from 'next';

import React from 'react';

import Container from '@/common/components/elements/Container';
import { METADATA } from '@/common/constant/metadata';

import Services from './_module';

export const metadata: Metadata = {
  title: `${METADATA.creator} | Services`,
  alternates: {
    canonical: process.env.DOMAIN
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
