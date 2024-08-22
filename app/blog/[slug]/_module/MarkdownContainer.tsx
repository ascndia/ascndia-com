import React, { ReactNode } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { BlogPost } from '@/common/types/blog';

import CodeBlock from './CodeBlock';

interface TableProps {
  children: ReactNode;
}

const Table = ({ children }: TableProps) => (
  <div className="table-container">
    <table className="duration-200 table w-full">{children}</table>
  </div>
);

export default function MarkdownContainer({ postData }: { postData: BlogPost }) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: props => (
          <a
            className="cursor-pointer duration-200 text-teal-600 hover:text-teal-400 hover:underline"
            target="_blank"
            {...props}
          />
        ),
        p: props => <div {...props} className="duration-200" />,
        h1: props => <h1 className=" duration-200 text-3xl font-medium dark:text-neutral-100" {...props} />,
        h2: props => <h2 className=" duration-200  text-2xl font-medium dark:text-neutral-100" {...props} />,
        h3: props => (
          <h3 className=" duration-200 pt-4 text-[18px] font-medium leading-snug dark:text-neutral-300" {...props} />
        ),
        ul: props => <ul className=" duration-200 list-disc space-y-3 pb-5 pl-5 " {...props} />,
        ol: props => <ol className=" duration-200  list-decimal space-y-3 pb-5 pl-5 " {...props} />,
        code: props => <CodeBlock {...props} />,
        blockquote: props => (
          <blockquote
            className=" duration-200 text-md rounded-lg border-l-[5px] border-neutral-700 border-l-cyan-500 bg-neutral-100 py-3 pl-6 text-cyan-800 dark:bg-neutral-800 dark:text-cyan-200"
            {...props}
          />
        ),
        table: props => <Table {...props} />,
        th: props => (
          <th className=" duration-200 border px-3 py-1 text-left dark:border-neutral-600">{props.children}</th>
        ),
        td: props => <td className=" duration-200 border px-3  py-1 dark:border-neutral-600">{props.children}</td>
      }}
    >
      {postData.contentHtml || ''}
    </Markdown>
  );
}
