import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

function Container({ className, children }: { className?: string; children?:ReactNode }) {
  return <div className={cn("max-w-[1250px] mx-auto sm:px-8 px-5", className)}>{children}</div>;
}

export default Container;
