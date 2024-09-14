import { Container, RippleButton } from "@/components/custom";
import { Image } from "@nextui-org/react";
import React from "react";

function Sub_Cta() {
  return (
    <section className="py-10">
      <Container>
        <div className="md:min-h-[20rem] min-h-[60rem] p-10 bg-gradient-to-br from-blue-500 via-blue-500 to-blue-700 rounded-xl flex flex-col items-start justify-center relative">
          {/* absolute start */}
          <div className="h-48 w-48 absolute bottom-2 right-10">
            <Image src="/imgs/server.png" />
          </div>
          {/* absolute end */}

          {/* main start */}
          <div className="text-white md:p-10 md:w-1/2">
            <h3 className="text-4xl">
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
        </div>
      </Container>
    </section>
  );
}

export default Sub_Cta;
