import { Metadata } from 'next';

import Container from '@/common/components/elements/Container';
import { METADATA } from '@/common/constant/metadata';

import Home from './_module';

export const metadata: Metadata = {
  title: `${METADATA.creator} Personal Website`,
  alternates: {
    canonical: process.env.DOMAIN
  },
  openGraph: {
    title: `${METADATA.creator} Personal Website`,
    description: METADATA.description,
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: METADATA.creator,
    images: METADATA.image
  }
};

export default async function HomePage() {
  return (
    <>
      <Container data-aos="fade-up">
        <Home />
      </Container>
    </>
  );
}
