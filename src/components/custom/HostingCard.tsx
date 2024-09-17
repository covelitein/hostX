"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import RippleButton from "./RippleButton";
import { FaArrowRight } from "react-icons/fa";

const HostingCard: React.FC<{
  price: string;
  title: string;
  description: string;
  renewsAt: string;
}> = ({ price, title, description, renewsAt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="sm:p-10 p-6 bg-gray-200 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <button className="bg-[#60a5fa] px-5 py-1 rounded-lg text-white">
        Starting at {price}
      </button>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-5">{description}</p>

      <div className="mt-5 py-3 w-full">
        <RippleButton
          className="relative flex items-center justify-center rounded-full text-sm bg-[#06065c] text-white px-5 py-3 overflow-hidden w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="mr-2">Learn More</span>
          <motion.div
            className="absolute right-7"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <FaArrowRight />
          </motion.div>
        </RippleButton>
      </div>

      <h4 className="mt-3">{renewsAt}</h4>
    </motion.div>
  );
};

export default HostingCard;
