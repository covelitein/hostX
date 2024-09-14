import { Container, RippleButton } from "@/components/custom";
import React from "react";

function Hosting() {
  return (
    <section className="py-10">
      <Container>
        <h3 className="text-3xl mb-5">
          Maximize Your Project’s Success with Premier Hosting Solutions
        </h3>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="p-6 bg-gray-200 rounded-lg">
            <button className="bg-[#60a5fa] px-5 py-1 rounded-lg text-white">
              Starting at $3.30/mon
            </button>
            <h3 className="mt-4 text-xl font-semibold">Wordpress Hosting</h3>
            <p className="mt-5">
              A Simple, Powerful & Complete solution for WordPress Websites
            </p>
            <RippleButton className="mt-5 py-3 w-full rounded-full text-sm">
              Learn More
            </RippleButton>
            <h4 className="mt-3">Renews at regular rate</h4>
          </div>
          <div className="p-6 bg-gray-200 rounded-lg">
            <button className="bg-[#60a5fa] px-5 py-1 rounded-lg text-white">
              Starting at $2.99/mon
            </button>
            <h3 className="mt-4 text-xl font-semibold">VPS Hosting</h3>
            <p className="mt-5">
              High performance SSD VPS powered by KVM and OpenVZ
            </p>
            <RippleButton className="mt-5 py-3 w-full rounded-full text-sm">
              Learn More
            </RippleButton>
            <h4 className="mt-3">Renews at regular rate</h4>
          </div>
          <div className="p-6 bg-gray-200 rounded-lg">
            <button className="bg-[#60a5fa] px-5 py-1 rounded-lg text-white">
              Starting at $4.99/mon
            </button>
            <h3 className="mt-4 text-xl font-semibold">Shared Hosting</h3>
            <p className="mt-5">
              Build your ideal website with our easy-to-use Shared Hosting
            </p>
            <RippleButton className="mt-5 py-3 w-full rounded-full text-sm">
              Learn More
            </RippleButton>
            <h4 className="mt-3">Renews at regular rate</h4>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hosting;
