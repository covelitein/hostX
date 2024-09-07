import { RippleButton } from "@/components/custom";
import React from "react";

function Hero() {
  return (
    <>
      {/* hero start */}
      <div className="moving-gradient md:min-h-screen pb-10">
        <div className="lg:px-16 md:px-12 sm:px-10 px-6 lg:mt-[15rem] md:mt-[13rem] mt-32 text-white">
          <h3 className="lg:text-6xl md:text-4xl text-3xl mb-3">Your Ideas.</h3>
          <h3 className="lg:text-6xl md:text-4xl text-3xl">Better Hosting.</h3>
          <p className="mt-5 max-lg:text-sm">
            Find the perfect home for your website. Whether you want speed,
            simplicity, space, or super-power, we’ve got you covered with
            shared, VPS, dedicated, and Managed WordPress options.
          </p>
          <div className="mt-7 flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-2">
            <RippleButton className="rounded-xl border-[1px] border-[#06065c] max-lg:text-sm">
              Get Started Now
            </RippleButton>
            <RippleButton className="rounded-xl border-[1px] border-white bg-transparent hover:bg-white hover:text-[#06065c] duration-200 max-lg:text-sm">
              Find Domain
            </RippleButton>
          </div>
        </div>
      </div>
      {/* hero end */}
    </>
  );
}

export default Hero;
