import { Metadata } from 'next';

import Container from '@/common/components/elements/Container';
import { METADATA } from '@/common/constant/metadata';

import Skills from '@/modules/skill';

export const metadata: Metadata = {
  title: `${METADATA.creator} | My Skills`,
  alternates: {
    canonical: process.env.DOMAIN
  }
};

export default async function HomePage() {
  return (
    <>
      <Container data-aos="fade-up">
        <Skills />
      </Container>
    </>
  );
}
