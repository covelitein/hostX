import { Container } from "@/components/custom";
import { ToolCard } from "@/components/tool";
import { tools } from "@/constants";
import { Image } from "@nextui-org/react";
import React from "react";

function Tools() {
  const displayTools = tools.map((tool) => (
    <ToolCard key={tool.src} src={tool.src} heading={tool.heading} desc={tool.desc} />
  ));

  return (
    <section className="py-20">
      <Container className="md:px-10 px-5">
        <div className="">
          <h2 className="md:text-5xl text-3xl text-center capitalize mb-2 font-bold text-[#06065c]">
            Optimized for all
          </h2>
          <h4 className="text-center text-[#06065c]">
            Designed with speed in mind to meet every developers dream.
          </h4>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-5">{displayTools}</div>
      </Container>
    </section>
  );
}

export default Tools;
