import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { getServices } from '@/common/libs/fetch/data';
import { IService } from '@/common/types/data/types';

import ServiceCard from './ServiceCard';

function ServiceList() {
  const { data } = useQuery({
    queryKey: ['services'],
    queryFn: getServices
  });
  const [filtered, setFiltered] = useState<IService[]>(data as IService[]);
  useEffect(() => {
    setFiltered(data?.filter((service: IService) => service.isShow) as IService[]);
  }, [data]);

  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 gap-6">
      {filtered?.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ServiceCard {...service} />
        </motion.div>
      ))}
    </section>
  );
}

export default ServiceList;
