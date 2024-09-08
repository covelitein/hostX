import { Container } from "@/components/custom";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Plans() {
  return (
    <section className="py-20">
      <Container>
        <h3 className="text-4xl font-semibold mb-5">THE BEST WEB HOSTING</h3>
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-gray-300 p-8 rounded-xl">
            <button className="bg-blue-500 rounded-xl py-2 px-5 text-white text-sm mb-5">
              Starting at $3.30/mo
            </button>
            <h3 className="font-semibold text-2xl mb-5">Wordpress Hosting</h3>
            <p className="">
              A Simple, Powerful & Complete solution for WordPress Websites
            </p>
            <button className="mt-5 bg-[#06065c] w-full text-white py-3 rounded-full text-sm flex items-center justify-center gap-3">
              <span>Learn More</span>
              <FaArrowRightLong className="text-xl" />
            </button>
          </div>

          <div className="bg-gray-300 p-8 rounded-xl">
            <button className="bg-blue-500 rounded-xl py-2 px-5 text-white text-sm mb-5">
              Starting at $2.99/mo
            </button>
            <h3 className="font-semibold text-2xl mb-5">VPS Hosting</h3>
            <p className="">
              High performance SSD VPS powered by KVM and OpenVZ
            </p>
            <button className="mt-5 bg-[#06065c] w-full text-white py-3 rounded-full text-sm flex items-center justify-center gap-3">
              <span>Learn More</span>
              <FaArrowRightLong className="text-xl" />
            </button>
          </div>

          <div className="bg-gray-300 p-8 rounded-xl">
            <button className="bg-blue-500 rounded-xl py-2 px-5 text-white text-sm mb-5">
              Starting at $4.99/mo
            </button>
            <h3 className="font-semibold text-2xl mb-5">Shared Hosting</h3>
            <p className="">
              Build your ideal website with our easy-to-use Shared Hosting
            </p>
            <button className="mt-5 bg-[#06065c] w-full text-white py-3 rounded-full text-sm flex items-center justify-center gap-3">
              <span>Learn More</span>
              <FaArrowRightLong className="text-xl" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Plans;
