"use client";

import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";

function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen((prev) => !prev); // Toggle the menu state
  };

  return (
    <header className="absolute top-0 left-0 z-[99] w-full">
      <div className="bg-black py-3 px-11 flex items-center gap-4 justify-end text-white max-md:hidden">
        <button className="border-[2px] rounded-full px-3 py-1 text-sm flex items-center gap-2">
          <BsCart className="text-lg" />
          <span>Cart</span>
        </button>
        <button className="border-[2px] px-5 py-1 text-sm border-white rounded-xl">
          Login
        </button>
      </div>
      <nav className="sm:px-10 px-4 relative md:py-3 py-6 flex items-center justify-between">
        {/* logo start */}
        <div className="">
          <h3 className="text-white text-xl font-semibold">HostSpacing</h3>
        </div>
        {/* logo end */}

        {/* navlinks start */}
        <ul className="flex items-center gap-10 text-white max-md:hidden">
          <li className="cursor-pointer">Domain</li>
          <li className="cursor-pointer">Hosting</li>
          <li className="cursor-pointer">WordPress</li>
          <li className="cursor-pointer">Templates</li>
          <li className="cursor-pointer">Security</li>
          <li className="cursor-pointer">Affiliates</li>
        </ul>
        {/* navlinks end */}

        {/* mobile controls start */}
        <div className="flex items-center gap-3 md:hidden">
          <button className="">
            <BsCart className="text-2xl text-white" />
          </button>
          <button onClick={handleToggle} className="">
            <motion.div initial={false} animate={{ rotate: isOpen ? 360 : 0 }}>
              {isOpen ? (
                <MdClose className="text-3xl text-white" />
              ) : (
                <MdOutlineMenu className="text-4xl text-white" />
              )}
            </motion.div>
          </button>
        </div>
        {/* mobile controls end */}

        {/* mobile nav start */}
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:hidden absolute top-[4.7rem] left-0 w-full text-white bg-black flex flex-col gap-2"
          >
            <li className="cursor-pointer py-4 px-2">Domain</li>
            <li className="cursor-pointer py-4 px-2">Hosting</li>
            <li className="cursor-pointer py-4 px-2">WordPress</li>
            <li className="cursor-pointer py-4 px-2">Templates</li>
            <li className="cursor-pointer py-4 px-2">Security</li>
            <li className="cursor-pointer py-4 px-2">Affiliates</li>
          </motion.ul>
        )}
        {/* mobile nav end */}
      </nav>
    </header>
  );
}

export default Header;
