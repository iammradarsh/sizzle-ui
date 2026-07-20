"use client";

import { useEffect, useRef } from "react";
import { animate, motionValue } from "motion/react";

export function useGlassMouse() {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = motionValue(50);
  const mouseY = motionValue(50);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMove = (e: PointerEvent) => {
      const rect = element.getBoundingClientRect();

      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      animate(mouseX, x, {
        duration: 0.25,
      });

      animate(mouseY, y, {
        duration: 0.25,
      });
    };

    element.addEventListener("pointermove", handleMove);

    return () => {
      element.removeEventListener("pointermove", handleMove);
    };
  }, [mouseX, mouseY]);

  return {
    ref,
    mouseX,
    mouseY,
  };
}