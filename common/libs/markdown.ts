import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { BlogPost } from '../types/blog';

export async function fetchMarkdown(fileUrl: string): Promise<string> {
  const res = await fetch(fileUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${fileUrl}`);
  }
  const markdown = await res.text();
  return markdown;
}

export async function parseMarkdown(markdownContent: string): Promise<string> {
  const { content, data } = matter(markdownContent);
  const processedContent = await remark()
    .use(html as any)
    .process(content);
  return processedContent.toString();
  // return markdownContent;
}

export async function fetchAndParseMarkdown(blog: BlogPost): Promise<BlogPost> {
  const markdown = await fetchMarkdown(blog.src);
  const contentHtml = await parseMarkdown(markdown);

  return {
    ...blog,
    contentHtml
  };
}
