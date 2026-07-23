"use client";

import BgBlurCanvas from "./BgBlurCanvas";

interface BgBlurProps {
  className?: string;
}

export default function BgBlur({ className = "" }: BgBlurProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <BgBlurCanvas />
    </div>
  );
}
