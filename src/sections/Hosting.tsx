import { Container, HostingCard } from "@/components/custom";
import { hostingPlans } from "@/constants";
import React from "react";

function Hosting() {
  const displayPlans = hostingPlans.map((plan) => (
    <HostingCard key={plan.title} {...plan} />
  ));
  return (
    <section className="py-10">
      <Container>
        <h3 className="text-3xl mb-5">
          Maximize Your Project’s Success with Premier Hosting Solutions
        </h3>
        <div className="grid md:grid-cols-3 gap-5">{displayPlans}</div>
      </Container>
    </section>
  );
}

export default Hosting;
