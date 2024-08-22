import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';

import BlogList from './_module/components/BlogList';

export default async function Blogs() {
  return (
    <Container data-aos="fade-up">
      <PageHeading title="Blog" description="Welcome to my blog, where I share my thoughts and insights." />
      <BlogList />
    </Container>
  );
}
