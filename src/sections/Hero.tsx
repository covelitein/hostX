import { Container, RippleButton } from "@/components/custom";
import { Image } from "@nextui-org/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function Hero() {
  return (
    <div className="py-5">
      <Container className="grid md:grid-cols-2 grid-cols-1 max-md:px-5">
        {/* desc start */}
        <div className="flex flex-col justify-center md:pr-20 max-md:py-5">
          <h3 className="md:text-6xl text-4xl font-bold text-[#06065c] mb-5 font-[PolySans-Median]">
            Your Ideas. <br /> Better Hosting.
          </h3>
          <p className="mb-5">
            Find the perfect home for your website. Whether you want speed,
            simplicity, space, or super-power, we’ve got you covered with
            shared, VPS, dedicated, and Managed WordPress options.
          </p>
          
          <div className="">
            <RippleButton className="text-base bg-[#06065c] py-3 mt-5 max-sm:w-full">
              Get started
            </RippleButton>
          </div>
        </div>
        {/* desc end */}

        {/* img start */}
        <div className="max-md:order-first">
          <Image src="/imgs/hero1.png" />
        </div>
        {/* img end */}
      </Container>
    </div>
  );
}

export default Hero;
