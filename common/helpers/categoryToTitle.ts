import { skillCategory } from '../types/skill';

export default function categoryToTitle(string: string) {
  switch (string) {
    case 'fe': {
      return 'Front-End';
    }
    case 'be': {
      return 'Back-End';
    }
    case 'fs': {
      return 'Full-Stack';
    }
    case 'fw': {
      return 'Frameworks';
    }
    case 'lib': {
      return 'Libraries';
    }
    case 'sv': {
      return 'Services';
    }
    case 'tool': {
      return 'Tools';
    }
    case 'misc': {
      return 'Misc';
    }
    case 'db': {
      return 'Databases';
    }
    case 'lang': {
      return 'Languages';
    }
    default: {
      return 'category not known';
    }
  }
}
