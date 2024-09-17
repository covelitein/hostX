"use client";

import React, { useState, useEffect } from "react";
import { FaHeadset, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const FixedSupportAndScroll = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Effect to track the scroll position and show/hide the scroll icon
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bg-white h-[15rem] w-[4rem] bottom-4 left-3 border-gray-400 border-[1px] rounded-xl flex flex-col items-center justify-between p-4 shadow-lg space-y-6">
      {/* Support Icon */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="bg-[#3b82f6] text-white p-3 rounded-full shadow-lg cursor-pointer"
      >
        <FaHeadset size={24} />
      </motion.div>

      {/* Scroll-to-top Icon */}
      {showScrollTop && (
        <motion.div
          className="bg-blue-700 text-white p-3 rounded-full shadow-lg cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.2 }}
        >
          <FaArrowUp size={24} />
        </motion.div>
      )}
    </div>
  );
};

export default FixedSupportAndScroll;
