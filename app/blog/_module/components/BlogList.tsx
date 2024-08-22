'use client';

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { getBlogs } from '@/common/libs/fetch/data';
import { BlogPost } from '@/common/types/blog';

import BlogCard from './BlogCard';

function BlogList() {
  const { data } = useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogs
  });
  const [filtered, setFiltered] = useState<BlogPost[]>(data as BlogPost[]);
  useEffect(() => {
    setFiltered(data?.filter((service: BlogPost) => service.show) as BlogPost[]);
  }, [data]);

  return (
    <section className="grid sm:grid-cols-2 grid-cols-1 gap-6">
      {filtered?.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <BlogCard {...project} />
        </motion.div>
      ))}
    </section>
  );
}

export default BlogList;
