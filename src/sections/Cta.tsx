import { Container, RippleButton } from "@/components/custom";
import React from "react";

function Cta() {
  return (
    <section className="py-10">
      <Container>
        <div className="min-h-[80vh] bg-[url(/imgs/cta.jpg)] bg-cover bg-center rounded-xl relative flex items-start justify-center flex-col">
          <div className="absolute top-0 left-0 bg-black/50 h-full w-full z-[2] rounded-xl"></div>
          <div className="px-20 z-[3] relative text-white">
            <h3 className="text-4xl mb-7">
              Grow your customers, <br /> your followers and <br /> your website
              presence
            </h3>
            <p>
              Help success find you wherever your audience searches <br /> with
              our automated marketing tools, and our SEO experts <br /> are
              ready to help you get the best.
            </p>
            <RippleButton className="border-2 bg-transparent mt-7">
              Get started
            </RippleButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Cta;
