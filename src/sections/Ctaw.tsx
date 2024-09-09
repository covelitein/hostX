import { Container } from "@/components/custom";
import { ToolCard } from "@/components/tool";
import { tools } from "@/constants";
import { Image } from "@nextui-org/react";
import React from "react";

function Ctaw() {
  const displayTool = tools.map((tool) => (
    <ToolCard key={tool.heading} src={tool.src} heading={tool.heading} desc={tool.desc} />
  ));
  return (
    <section className="py-20">
      <Container>
        <h3 className="text-4xl font-semibold capitalize">Optimized for all</h3>
        <p className="mt-2">
          {" "}
          Designed with speed in mind to meet every developers dream.
        </p>

        <div className="mt-5 grid grid-cols-4 gap-5">{displayTool}</div>
      </Container>
    </section>
  );
}

export default Ctaw;
