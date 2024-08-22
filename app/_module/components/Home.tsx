import Breakline from '@/common/components/elements/Breakline';

import Introduction from './Introduction';
import QuickNavigation from './QuickNavigation';
import Skills from './Skills';

export default function Home() {
  return (
    <>
      <Introduction />
      <Breakline className="mt-8 mb-6" />
      <QuickNavigation />
      <Breakline className="mt-8 mb-6" />
      <Skills />
    </>
  );
}
