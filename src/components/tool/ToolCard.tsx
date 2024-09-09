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
    <div className="bg-gray-300 p-5 rounded-lg">
      <Image src={src} alt={src}/>
      <h3 className="my-3 font-semibold text-lg">{heading}</h3>
      <p className="">{desc}</p>
    </div>
  );
}

export default ToolCard;
