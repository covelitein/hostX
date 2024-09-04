"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const RippleButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const createRipple = (event: any) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "ripple";

    const oldRipple = button.querySelector(".ripple");
    if (oldRipple) {
      oldRipple.remove();
    }

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  return (
    <button
      className={cn(
        "relative overflow-hidden bg-[#06065c] text-white py-4 px-10 rounded focus:outline-none",
        className
      )}
      onClick={createRipple}
    >
      {children}
    </button>
  );
};

export default RippleButton;
