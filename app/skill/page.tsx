import { Metadata } from 'next';

import Skills from '@/app/skill/_module';

import Container from '@/common/components/elements/Container';
import { METADATA } from '@/common/constant/metadata';

export const metadata: Metadata = {
  title: `${METADATA.creator} Skills`,
  description: 'Collections of skills i have mastered',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://ascndia.com'}`
  },
  openGraph: {
    title: `My Skills`,
    description: 'Collections of skills i have mastered',
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://ascndia.com'}/skill`,
    siteName: METADATA.siteName,
    images: METADATA.image
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
