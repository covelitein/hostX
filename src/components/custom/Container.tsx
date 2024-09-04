import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

function Container({ className, children }: { className?: string; children?:ReactNode }) {
  return <div className={cn("max-w-[1250px] mx-auto px-8", className)}>{children}</div>;
}

export default Container;
