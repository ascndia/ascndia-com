'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

import categoryToTitle from '@/common/helpers/categoryToTitle';
import { SKILL_INTERFACE, mastery, skillCategory, usage } from '@/common/types/skill';

import Breakline from './Breakline';

interface TooltipProps {
  title: string;
  info: string;
  icon: string;
  category: { title: string }[];
  usage: usage;
  mastery: mastery;
  children: ReactNode;
}

const Tooltip = ({ title, info, icon, category, mastery, usage, children }: TooltipProps) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const tooltipVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative tooltip inline-block">
      <div className="tooltip-container relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {isTooltipVisible && (
        <motion.div
          className="hidden tooltip-child lg:block bottom-full mb-2 bg-neutral-500 dark:bg-neutral-100 dark:text-neutral-700 text-neutral-100 text-xs font-medium rounded px-2 py-2 absolute w-max max-w-xs"
          variants={tooltipVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-fit z-30 left-11">
            <div className="flex justify-between gap-4 items-center">
              <h2 className="text-xl">{title}</h2>
              <Image src={icon} width={20} height={20} alt={title} />
            </div>
            <Breakline />
            <div className="flex flex-wrap gap-1 items-center justify-start max-w-[240px]">
              {category.map((cat, index) => (
                <p className="px-[5px] py-[2px] text-center rounded-sm bg-neutral-200 dark:bg-neutral-400 text-neutral-500 dark:text-neutral-700">
                  {categoryToTitle(cat.title)}
                </p>
              ))}
            </div>
            <Breakline />
            <p className="text-justify max-w-[240px]">{info}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Tooltip;
