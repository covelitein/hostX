import React from "react";
import Features from "./Features";

function HeroBG() {
  return (
    <div className="bg-[url(/imgs/slide1.jpg)] bg-cover bg-center min-h-screen relative flex justify-center items-center flex-col max-md:hidden">
      <div className="absolute h-full w-full bg-[rgba(0,0,0,0.7)] z-[1]"></div>
      <Features />
    </div>
  );
}

export default HeroBG;
