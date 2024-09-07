"use client";

import React from "react";
import { FaShieldAlt, FaHeadset, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

function Features() {
  return (
    <div>
      {/* feature start */}
      <div className="z-[2] mt-14">
        {/* first start */}
        <motion.div
          className="z-[9] relative"
          animate={{
            y: [0, 30],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <div className="bg-white/70 backdrop-blur-xl border-2 border-white px-6 py-3 rounded-xl lg:w-[25rem] w-[20rem] mb-7 flex items-center gap-5">
            <FaShieldAlt className="text-3xl" />
            <h3 className="">30-day money-back guarantee</h3>
          </div>
        </motion.div>
        {/* first end */}

        {/* second start */}
        <motion.div
          className="z-[9] relative"
          animate={{
            x: [0, 25],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <div className="bg-white/70 backdrop-blur-xl border-2 border-white px-6 py-3 rounded-xl lg:w-[25rem] w-[20rem] mb-7 flex items-center gap-5">
            <FaHeadset className="text-3xl" />
            <h3 className="">Unlimited support</h3>
          </div>
        </motion.div>
        {/* second end */}

        {/* third start */}
        <motion.div
          className="z-[9] relative"
          animate={{
            y: [30, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <div className="bg-white/70 backdrop-blur-xl border-2 border-white px-6 py-3 rounded-xl lg:w-[25rem] w-[20rem] flex items-center gap-5">
            <FaCode className="text-3xl" />
            <h3 className="">Standby developers if needed</h3>
          </div>
        </motion.div>
        {/* third end */}
      </div>
      {/* feature end */}
    </div>
  );
}

export default Features;
