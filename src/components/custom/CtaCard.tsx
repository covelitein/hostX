'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@nextui-org/react';

interface CardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  bgColor: string;
}

const CtaCard: React.FC<CardProps> = ({ imageSrc, title, subtitle, bgColor }) => {
  return (
    <motion.div
      className={`min-h-[25rem] rounded-lg flex items-center justify-center flex-col gap-5 ${bgColor} overflow-hidden`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }} // Slight scaling on hover
      whileTap={{ scale: 0.95 }}   // Small scale down on click
    >
      <motion.div
        className="flex items-center justify-center"
        whileHover={{ scale: 1.1 }} // Scale up the image on hover
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Image src={imageSrc} />
      </motion.div>

      <motion.h3
        className="text-4xl"
        whileHover={{ scale: 1.05, color: '#3B82F6' }} // Add scale and color change
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {title}
      </motion.h3>

      <motion.h2
        className="text-xl text-center px-5"
        whileHover={{ scale: 1.05, color: '#60A5FA' }} // Add scale and color change to subtitle
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {subtitle}
      </motion.h2>
    </motion.div>
  );
};

export default CtaCard;
