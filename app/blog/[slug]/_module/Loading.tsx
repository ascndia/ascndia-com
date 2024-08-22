import Link from 'next/link';

import Container from '@/common/components/elements/Container';

export default function Loading() {
  return (
    <>
      <Container
        data-aos="fade-up"
        className="flex flex-col text-neutral-600 dark:text-neutral-300 space-y-10 items-center justify-center lg:h-[90vh] overflow-hidden"
      >
        <h1 className="text-4xl md:text-6xl font-semibold">Loading..</h1>
        <p className="text-center">Please wait a litle</p>
      </Container>
    </>
  );
}
