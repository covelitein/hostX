import { Container, RippleButton } from "@/components/custom";
import { Image } from "@nextui-org/react";
import React from "react";

function About() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid lg:grid-cols-2">
          <div className="bg-gray-300 md:p-16 sm:p-9 p-5">
            <h3 className="mb-10 md:text-5xl sm:text-4xl text-3xl">
              Why Choose Hostspacing as Your Hosting Provider
            </h3>
            <p className="mb-8 md:text-lg">
              At Hostspacing, we’re more than just a hosting service - we’re
              your partner in success. Our mission is to grow with you by
              constantly enhancing our platform to meet your evolving needs.
              From delivering tailored support to utilizing cutting-edge
              technologies, we stay ahead of industry trends to boost your
              online presence.
            </p>
            <RippleButton className="">Explore Products</RippleButton>
          </div>
          <div className="bg-[url(/imgs/about.jpg)] bg-cover bg-center">
            
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
