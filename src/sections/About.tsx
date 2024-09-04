import { Container } from "@/components/custom";
import { Image } from "@nextui-org/react";
import React from "react";

function About() {
  return (
    <section className="py-10">
      <Container className="px-10 grid grid-cols-2">
        {/* img start */}
        <div className="flex items-center justify-center bg-red-500 h-[29rem]">
            <Image src="/imgs/h2.png"/>
        </div>
        {/* img end */}

        {/* desc start */}
        <div className="px-5 flex flex-col items-center justify-center">
          <h3 className="text-5xl pl-5 font-semibold text-[#06065c]">
            Everything your website needs to become the best
          </h3>
          <p className="pl-5 mt-5 pr-10">
            No matter how demanding your website is we provide considerable
            amount of disk space and more than enough bandwidth for you to get
            started! Starting from 10GB to unlimited disk space and with
            unlimited bandwidth you will be conquering the world in no time.
          </p>
        </div>
        {/* desc end */}
      </Container>
    </section>
  );
}

export default About;
