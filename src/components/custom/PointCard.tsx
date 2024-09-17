"use client";

import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";

const PointCard: React.FC<{
  src: string;
  heading: string;
  desc: string;
}> = ({ src, heading, desc }) => {
  return (
    <motion.div
      className="py-10 border-[1px] px-6 min-h-[20rem] flex flex-col gap-5 items-center justify-center rounded-xl shadow-lg transition-all duration-300 ease-out"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)" }} // Scale and shadow on hover
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        background: "linear-gradient(135deg, #e5e7eb, #d1d5db)", // Gray gradient background
      }}
    >
      <motion.div
        className="p-5"
        whileHover={{ scale: 1.1 }} // Slight scale on image hover
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Image src={src} alt="" />
      </motion.div>
      <motion.h3
        className="text-xl font-semibold text-center text-black"
        whileHover={{ scale: 1.1 }} // Scale heading on hover
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {heading}
      </motion.h3>
      <motion.p
        className="text-center text-black"
        whileHover={{ scale: 1.05 }} // Scale description slightly on hover
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {desc}
      </motion.p>
    </motion.div>
  );
};

export default PointCard;
