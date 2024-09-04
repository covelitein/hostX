import { Container, RippleButton } from "@/components/custom";
import { Image } from "@nextui-org/react";
import React from "react";

function CtaW() {
  return (
    <section className="md:py-20 py-10">
      <Container className="grid md:grid-cols-2 grid-cols-1 md:px-10 px-5 max-md:gap-5">
        {/* desc start */}
        <div className=" pt-16">
          <h3 className="md:text-5xl text-4xl font-semibold text-[#06065c]">
            WordPress made easy
          </h3>
          <p className="mt-5 md:pr-14">
            Express yourself by creating remarkable websites with stunning
            designs choosing from more than 100 templates made by masters of
            their craft. Easy Website Builder which allows you to easily
            customize anything you want in just a few clicks without worrying
            about a thing.
          </p>
          <RippleButton className="mt-6 bg-[#06065c]/80 max-md:w-full">Get Started Now</RippleButton>
        </div>
        {/* desc end */}

        {/* img start */}
        <div className="">
          <Image src="/imgs/w.png" />
        </div>
        {/* img end */}
      </Container>
    </section>
  );
}

export default CtaW;
