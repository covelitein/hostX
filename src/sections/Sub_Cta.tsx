import { Container, RippleButton } from "@/components/custom";
import { Image } from "@nextui-org/react";
import React from "react";

function Sub_Cta() {
  return (
    <section className="py-10">
      <Container>
        <div className="md:min-h-[20rem] sm:min-h-[60rem] min-h-[50rem] sm:p-10 p-7 bg-gradient-to-br from-blue-500 via-blue-500 to-blue-700 rounded-xl grid md:grid-cols-2 gap-5 relative">
          {/* main start */}
          <div className="text-white md:p-10">
            <h3 className="sm:text-4xl text-3xl">
              Expand your customer base, increase your followers, and boost your
              website&apos;s visibility.
            </h3>
            <p className="mt-10">
              Help success find you wherever your audience searches with our
              automated marketing tools, and our SEO experts are ready to help
              you get the best.
            </p>

            <RippleButton className="mt-10 ">Get Started</RippleButton>
          </div>
          {/* main end */}

          {/* absolute start */}
          <div className="">
            <Image src="/imgs/server.png" />
          </div>
          {/* absolute end */}
        </div>
      </Container>
    </section>
  );
}

export default Sub_Cta;
