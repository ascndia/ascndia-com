import Breakline from '@/common/components/elements/Breakline';
import Introduction from './Introduction';
import SkillList from './SkillList';
import QuickNavigation from './QuickNavigation';

export default function Home() {
  return (
    <>
      <Introduction />
      <Breakline className="mt-8 mb-6" />
      <QuickNavigation />
      <Breakline className="mt-8 mb-6" />
      <SkillList />
    </>
  );
}
