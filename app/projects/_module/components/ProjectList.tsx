'use client';

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { getProjects } from '@/common/libs/fetch/data';
import { IProject } from '@/common/types/data/types';

import ProjectCard from './ProjectCard';

function ProjectList() {
  const { data } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  });
  const [filtered, setFiltered] = useState<IProject[]>(data as IProject[]);
  useEffect(() => {
    setFiltered(data?.filter((service: IProject) => service.isShow) as IProject[]);
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
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </section>
  );
}

export default ProjectList;
