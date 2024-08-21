'use client';

import { getProjects } from '@/fetch/data';
import { Project } from '@/payload/payload-types';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { ApiResponse } from '@/common/types/api-types';

import ProjectCard from './ProjectCard';

function ProjectList() {
  const { data } = useQuery<ApiResponse<Project>>({
    queryKey: ['projects'],
    queryFn: getProjects
  });
  const [filtered, setFiltered] = useState<Project[]>(data?.docs as Project[]);
  useEffect(() => {
    setFiltered(data?.docs?.filter((service: Project) => service.show) as Project[]);
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
