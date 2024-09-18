"use client";

import React from "react";
import { motion } from "framer-motion";

// List of logos (ensure these paths are correct and accessible)
const logos = [
  { id: 1, src: "/imgs/magento-default.svg", alt: "Magento Logo" },
  { id: 2, src: "/imgs/nodejs.svg", alt: "Node.js Logo" },
  { id: 3, src: "/imgs/php.svg", alt: "PHP Logo" },
  { id: 4, src: "/imgs/prestashop-default.svg", alt: "PrestaShop Logo" },
  { id: 5, src: "/imgs/python.svg", alt: "Python Logo" },
  { id: 6, src: "/imgs/ruby.svg", alt: "Ruby Logo" },
  { id: 7, src: "/imgs/woocommerce-default.svg", alt: "WooCommerce Logo" },
  { id: 8, src: "/imgs/wordpress.svg", alt: "WordPress Logo" },
];

const Circular = () => {
  const radius = 60; // Radius controls the size of the circular layout

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: radius * 4,
        height: radius * 4,
      }}
    >
      {/* {logos.map((logo, index) => {
        const angle = (index / logos.length) * 360;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.div
            key={logo.id}
            className="absolute bg-white rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={logo.src}
              alt={logo.alt}
              onError={(e) => {
                e.currentTarget.src = "/imgs/placeholder.svg"; // Fallback if image fails to load
                e.currentTarget.alt = "Image not found";
              }}
              className="w-14 h-14 md:w-24 md:h-24 lg:w-12 lg:h-12 rounded-full shadow-lg object-contain"
            />
          </motion.div>
        );
      })} */}
    </div>
  );
};

export default Circular;
