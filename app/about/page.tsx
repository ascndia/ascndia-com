import { Metadata } from 'next';

import React from 'react';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import { METADATA } from '@/common/constant/metadata';

export const metadata: Metadata = {
  title: `${METADATA.creator} About me`,
  alternates: {
    canonical: process.env.DOMAIN
  },
  openGraph: {
    title: `${METADATA.creator} About me`,
    description: 'Get to know more about me',
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://ascndia.com'}/about`,
    siteName: METADATA.creator,
    images: METADATA.image
  }
};

export default function About() {
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title="About" description="Get to know more about me" />
        <div className="space-y-6 text-[17px] text-neutral-700 dark:text-neutral-300">
          <p>
            Hi! I am <b className="dark:text-neutral-100">Abdurrahman Izzuddin A.F</b>, a seasoned software engineer
            with a deep passion for creating elegant and efficient solutions through code. With a strong foundation in
            JavaScript and TypeScript, along with a comprehensive understanding of various frontend libraries and
            frameworks, I heve been navigating the ever-evolving landscape of web development with enthusiasm and
            dedication. Currently, reside in Surabaya, Indonesia 🇮🇩.
          </p>
          <p>
            As a fast learner and adaptive thinker, I thrive in dynamic environments where innovation is the driving
            force. My collaborative nature allows me to seamlessly integrate with teams, contributing not only my
            technical prowess but also a humble attitude that values every members input.
          </p>
          <p>
            This site is my platform to share insights, experiences, and discoveries from my journey as a software
            engineer. Join me as we delve into the ever-exciting realm of technology, where each line of code has the
            potential to shape the digital landscape in remarkable ways.
          </p>
          <p>Thank you for visiting, and I look forward to embarking on this knowledge-sharing adventure</p>{' '}
        </div>
      </Container>
    </>
  );
}
