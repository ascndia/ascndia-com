import { Metadata } from 'next';
import { METADATA } from '@/common/constant/metadata';

import Skills from '@/app/skill/_module';
import skillStore from '@/context/filter/store';
import Container from '@/common/components/elements/Container';

export const metadata: Metadata = {
  title: `${METADATA.creator} | My Skills`,
  alternates: {
    canonical: process.env.DOMAIN
  }
};

export default async function HomePage() {
  return (
    <>
      <Container data-aos='fade-up'>
        <Skills/>
      </Container>
    </>
  );
}
