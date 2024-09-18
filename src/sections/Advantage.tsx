'use client'

import { Container } from "@/components/custom";
import { features } from "@/constants";
import { Image } from "@nextui-org/react";
import React from "react";

export default function Advantage() {
  const displayFeatures = features.map((feature) => (
    <div key={feature.title} className="flex items-center my-5 text-2xl gap-5 py-4">
      {feature.icon}
      <h3 className="max-md:text-xl">{feature.title}</h3>
    </div>
  ));

  return (
    <section className="md:py-10 py-32">
      <Container>
        <h4 className="mb-5 md:text-5xl text-4xl">The Final web hosting destination</h4>
        <div className="grid md:grid-cols-2">
          <div className="">{displayFeatures}</div>
          <div className="flex items-center justify-center">
            <div className="md:w-[60%] w-[90%] mx-auto relative">
              <Image src="/imgs/hold.jpg" className="border-2 border-blue-400"/>

              {/* absolute logos start */}
              <div className="absolute w-[115%] h-full top-0 md:-left-8 -left-5 z-[99] grid gap-10 grid-cols-2">
                <div className="flex items-center">
                    <Image src="/imgs/magento-default.svg"/>
                </div>
                <div className="flex justify-end items-center">
                    <Image src="/imgs/nodejs.svg"/>
                </div>
                <div className="flex items-center">
                    <Image src="/imgs/php.svg"/>
                </div>
                <div className="flex justify-end items-center">
                    <Image src="/imgs/prestashop-default.svg"/>
                </div>
                <div className="flex items-center">
                    <Image src="/imgs/python.svg"/>
                </div>
                <div className="flex justify-end items-center">
                    <Image src="/imgs/ruby.svg"/>
                </div>
                <div className="flex items-center">
                    <Image src="/imgs/woocommerce-default.svg"/>
                </div>
                <div className="flex justify-end items-center">
                    <Image src="/imgs/wordpress.svg"/>
                </div>
              </div>
              {/* absolute logos end */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
