import { Container, RippleButton } from "@/components/custom";
import { PricingCard } from "@/components/tool";
import { pricing } from "@/constants";
import React from "react";

function Pricing() {
  const displayPricing = pricing.map((p) => (
    <PricingCard key={p.desc} planName={p.planName} desc={p.desc} price={p.price} />
  ));
  return (
    <section className="bg-gray-200 py-20">
      <div className="text-gray-600 mb-7 w-4/5 mx-auto md:p-3">
        <h5 className="text-center md:text-xl text-lg mb-2 text-[#06065c] font-semibold">THE BEST WEB HOSTING</h5>
        <h2 className="text-center md:text-5xl text-3xl text-[#06065c] font-semibold">Scalable, Simple Pricing</h2>
        <p className="text-center mt-4">
          Unbeatable price whether you&apos;re looking to create a website, blog or
          online store,
        </p>
        <p className="text-center max-sm:text-sm">
          Hostspacing can get you started with a hosting plan designed for your
          specific needs.
        </p>
      </div>
      <Container className="md:px-20 px-5">
        <section className="grid md:grid-cols-3 grid-cols-1 gap-4">{displayPricing}</section>
      </Container>
    </section>
  );
}

export default Pricing;
