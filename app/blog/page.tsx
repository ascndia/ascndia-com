import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';

import BlogList from './_module/components/BlogList';

export default async function Blogs() {
  return (
    <Container data-aos="fade-up">
      <PageHeading title="About" description="Get to know more about me" />
      <BlogList />
    </Container>
  );
}
