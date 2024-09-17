"use client";

import React from "react";
import { FaShieldAlt, FaHeadset, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

function Features() {
  return (
    <div>
      {/* feature start */}
      <div className="z-[2] mt-14 flex flex-col items-center justify-between gap-10">
        {/* Top Section */}
        <div className="flex justify-center gap-6">
          {/* First Element */}
          <motion.div
            className="z-[9] relative"
            animate={{ y: [0, 30] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <div className="bg-white/70 backdrop-blur-xl border-2 border-white p-5 rounded-xl w-[10rem] mb-7">
              <FaShieldAlt className="text-3xl" />
              <h3>
                30-day <br /> money-back guarantee
              </h3>
            </div>
          </motion.div>

          {/* Second Element */}
          <motion.div
            className="z-[9] relative"
            animate={{ x: [0, 25] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <div className="bg-white/70 backdrop-blur-xl border-2 border-white p-5 rounded-xl w-[10rem] mb-7">
              <FaHeadset className="text-3xl" />
              <h3>Unlimited support</h3>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section (Center) */}
        <motion.div
          className="z-[9] relative"
          animate={{ y: [30, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <div className="bg-white/70 backdrop-blur-xl border-2 border-white p-5 rounded-xl w-[10rem]">
            <FaCode className="text-3xl" />
            <h3>Standby developers if needed</h3>
          </div>
        </motion.div>
      </div>
      {/* feature end */}
    </div>
  );
}

export default Features;
