import React from 'react'
import { motion } from 'framer-motion'
import SERVICES from '@/common/constant/service'
import ServiceCard from './ServiceCard'

const FILTERED_SERVICES = SERVICES.filter(service => service.isShow)

function ServiceList() {
  return (
    <section className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
      {
        FILTERED_SERVICES.map((service,index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ServiceCard {...service}/>
          </motion.div>
        ))
      }
    </section>
  )
}

export default ServiceList