import { skillCategory } from '@/common/types/skill';

export type filterType = {
  title: string;
  category: { title: skillCategory };
};
