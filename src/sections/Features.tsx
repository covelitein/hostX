import { Container } from "@/components/custom";
import React from "react";
import { IoShieldHalf } from "react-icons/io5";
import { FaCheckCircle, FaLaptopCode } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";

function Features() {
  return (
    <div className="py-10">
      <Container className="max-md:px-5">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
          <div className="flex flex-col items-center gap-2 py-5 px-7 shadow-md border-[1px] rounded-lg">
            <IoShieldHalf className="text-5xl text-[#06065c]" />
            <h3 className="font-semibold text-lg max-md:text-center">30-day money-back guarantee</h3>
          </div>
          <div className="flex flex-col items-center gap-2 py-5 px-7 shadow-md border-[1px] rounded-lg">
            <FiHeadphones className="text-5xl text-[#06065c]" />
            <h3 className="font-semibold text-lg max-md:text-center"> Unlimited support</h3>
          </div>
          <div className="flex flex-col items-center gap-2 py-5 px-7 shadow-md border-[1px] rounded-lg">
            <FaLaptopCode className="text-5xl text-[#06065c]" />
            <h3 className="font-semibold text-lg max-md:text-center">Standby developers if needed</h3>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Features;
