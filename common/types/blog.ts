export interface BlogMetadata {
  id: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  slug: string;
  description: string;
}
export interface BlogPost extends BlogMetadata {
  src: string;
  show: boolean;
  featured: boolean;
  contentHtml: string;
}
