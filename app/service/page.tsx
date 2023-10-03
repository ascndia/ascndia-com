import Container from '@/common/components/elements/Container'
import Services from '@/modules/service'
import React from 'react'

import { Metadata } from 'next';
import { METADATA } from '@/common/constant/metadata';


export const metadata: Metadata = {
  title: `${METADATA.creator} | Services`,
  alternates: {
    canonical: process.env.DOMAIN
  }
};


function page() {
  return (
    <Container data-aos='fade-up'>
      <Services/>
    </Container>
  )
}

export default page