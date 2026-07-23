"use client";

import { useEffect, useRef } from "react";
import { Renderer } from "ogl";

export default function BgBlurCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2),
    });

    const gl = renderer.gl;

    gl.clearColor(0, 0, 0, 0);

    const canvas = gl.canvas;

    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";

    containerRef.current.appendChild(canvas);

    const resize = () => {
      if (!containerRef.current) return;

      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight,
      );
    };

    resize();

    window.addEventListener("resize", resize);

    let frameId = 0;

    const update = () => {
      frameId = requestAnimationFrame(update);

      gl.clear(gl.COLOR_BUFFER_BIT);
    };

    update();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);

      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" />;
}
