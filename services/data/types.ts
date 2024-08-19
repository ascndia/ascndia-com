export interface ISkill {
  title: string;
  icon: string;
  info: string;
  category: string[];
  mastery: 'Minimum' | 'Average' | 'Good';
  usage: 'Hobby' | 'Sometimes' | 'Rarely' | 'Secondary' | 'Primary';
  isShow: boolean;
  isShowInDashboard: boolean;
}

export interface IService {
  title: string;
  description: string;
  slug: string;
  icon: string;
  image: string;
  isShow: boolean;
}

export interface IProject {
  title: string;
  description: string;
  slug: string;
  icon: string;
  images: string[];
  category: string[];
  stack: {
    src: string;
    title: string;
    type: string[];
  }[];
  isFeatured: boolean;
  isShow: boolean;
  isShowInDashbard: boolean;
}
