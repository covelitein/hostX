import { Container, PointCard } from "@/components/custom";
import { dedicatedServerPoint } from "@/constants";
import { Image } from "@nextui-org/react";
import React from "react";

function DedicatedServer() {
  const displayPoints = dedicatedServerPoint.map((point) => (
    <PointCard
      key={point.src}
      src={point.src}
      heading={point.heading}
      desc={point.desc}
    />
  ));
  return (
    <section className="py-10">
      <Container>
        <h3 className="text-3xl">High-powered Dedicated Server Hosting.</h3>
        <div className="mt-5 grid md:grid-cols-3 gap-4">{displayPoints}</div>
      </Container>
    </section>
  );
}

export default DedicatedServer;
