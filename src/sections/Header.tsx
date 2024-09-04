import { Container, RippleButton } from "@/components/custom";
import Link from "next/link";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa6";
import { Image } from "@nextui-org/react";
import { IoMenuSharp } from "react-icons/io5";

function Header() {
  return (
    <header className="">
      <Container className="py-5 max-sm:px-5">
        {/* first batch start */}
        <div className="flex justify-between items-center">
          {/* logo start */}
          <Image src="/imgs/logo1.png" className="md:h-[2rem] h-[1.5rem]" alt="" />
          {/* logo end */}

          {/* cta start */}
          <div className="flex items-center gap-4">
            <button className="flex max-sm:hidden items-center text-sm gap-2 shadow-sm border-[1px] px-5 py-2 rounded-md">
              <span>Cart</span>
              <BsCart3 className="text-lg" />
            </button>
            <RippleButton className="text-sm px-5 py-2 bg-[#06065c]">
              Sign In
            </RippleButton>
          </div>
          {/* cta end */}
        </div>
        {/* first batch end */}
      </Container>

      {/* divider start */}
      <div className="w-full bg-gray-200 h-[1px]"></div>
      {/* divider end */}

      {/* second batch start */}
      <nav className="">
        <Container className="py-5 flex justify-between items-center">
          <ul className="flex items-center gap-8 text-sm font-[550] max-md:hidden">
            <li className="">Domain</li>
            <li className="">Hosting</li>
            <li className="">WordPress</li>
            <li className="">Templates</li>
            <li className="">Security</li>
            <li className="">Affiliates</li>
          </ul>

          <IoMenuSharp className="md:hidden block text-3xl"/>

          <button className="flex items-center gap-2 text-sm text-[#06065c]">
            <FaGlobe className="text-lg"/>
            <span>Register a domain</span>
          </button>
        </Container>
        {/* divider start */}
        <div className="w-full bg-gray-200 h-[1px]"></div>
        {/* divider end */}
      </nav>
      {/* second batch start */}
    </header>
  );
}

export default Header;
