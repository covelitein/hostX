import { Image } from "@nextui-org/react";
import React from "react";

function PointCard({
  src,
  heading,
  desc,
}: {
  src: string;
  heading: string;
  desc: string;
}) {
  return (
    <div className="py-10 border-[1px] px-6 min-h-[20rem] flex flex-col gap-5 items-center justify-center rounded-xl shadow-lg">
      <div className="p-5">
        <Image src={src} alt="" />
      </div>
      <h3 className="text-xl font-semibold text-center">{heading}</h3>
      <p className="text-center">{desc}</p>
    </div>
  );
}

export default PointCard;
