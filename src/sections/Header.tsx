import React from "react";
import { BsCart } from "react-icons/bs";
import { MdOutlineMenu } from "react-icons/md";

function Header() {
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
      <nav className="sm:px-10 px-4 md:py-3 py-6 flex items-center justify-between">
        {/* logo start */}
        <div className="">
          <h3 className="text-white text-xl font-semibold">HostSpacing</h3>
        </div>
        {/* logo end */}

        {/* navlinks start */}
        <ul className="flex items-center gap-7 text-white max-md:hidden">
          <li className="cursor-pointer">Domain</li>
          <li className="cursor-pointer">Hosting</li>
          <li className="cursor-pointer">Wordpress</li>
          <li className="cursor-pointer">Templates</li>
          <li className="cursor-pointer">Security</li>
          <li className="cursor-pointer">Affiliates</li>
        </ul>
        {/* navlinks end */}

        {/* mobile controls start */}
        <div className="flex items-center gap-3 md:hidden">
          <button className="">
            <BsCart className="text-xl text-white" />
          </button>
          <button className="">
            <MdOutlineMenu className="text-2xl text-white" />
          </button>
        </div>
        {/* mobile controls end */}
      </nav>
    </header>
  );
}

export default Header;
