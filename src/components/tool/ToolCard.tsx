import { Image } from "@nextui-org/react";
import React from "react";

function ToolCard({
  src,
  heading,
  desc,
}: {
  src: string;
  heading: string;
  desc: string;
}) {
  return (
    <section className="shadow-md p-5 border-[2px] rounded-lg">
      <Image src={src} />
      <h3 className="font-semibold text-2xl mt-3">{heading}</h3>
      <p className="mt-3">{desc}</p>
    </section>
  );
}

export default ToolCard;
