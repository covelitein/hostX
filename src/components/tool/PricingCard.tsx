import React, { ReactNode } from "react";
import { RippleButton } from "../custom";

function PricingCard({
  planName,
  desc,
  price,
}: {
  planName: ReactNode | string;
  desc: string;
  price: string;
}) {
  return (
    <main className="bg-white rounded-lg px-3 py-12">
      <div className="w-[80%] mx-auto text-center">
        <h3 className="font-semibold text-3xl mb-3">{planName}</h3>
        <p>{desc}</p>
      </div>

      <div className="mt-5 text-center px-5">
        <h5 className="">Starting at only</h5>
        <h4 className="text-4xl font-bold">
          {price}<span className="text-xl">/mon</span>
        </h4>
        <RippleButton className="w-full mt-6 py-2 bg-[#06065c]/80">
          Learn More
        </RippleButton>
        <span className="mt-5 text-sm block">Renews at regular rate</span>
      </div>
    </main>
  );
}

export default PricingCard;
