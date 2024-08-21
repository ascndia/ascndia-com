import { getServices } from '@/fetch/data';
import { Service } from '@/payload/payload-types';
import { IService } from '@/services/data/types';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { ApiResponse } from '@/common/types/api-types';

import ServiceCard from './ServiceCard';

function ServiceList() {
  const { data } = useQuery<ApiResponse<Service>>({
    queryKey: ['skills'],
    queryFn: getServices
  });
  const [filtered, setFiltered] = useState<Service[]>(data?.docs as Service[]);
  useEffect(() => {
    setFiltered(data?.docs?.filter((service: Service) => service.show) as Service[]);
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
