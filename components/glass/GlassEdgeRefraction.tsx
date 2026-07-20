"use client";

export default function GlassEdgeRefraction() {
  return (
    <>
      {/* Top Left */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-28 w-28 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,.28), transparent 70%)",
        }}
      />

      {/* Top Right */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(255,255,255,.18), transparent 70%)",
        }}
      />

      {/* Bottom Left */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 70%, rgba(255,255,255,.10), transparent 70%)",
        }}
      />

      {/* Bottom Right */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, rgba(255,255,255,.24), transparent 70%)",
        }}
      />

      {/* Top Edge */}
      <div
        className="pointer-events-none absolute inset-x-6 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,.8), transparent)",
        }}
      />

      {/* Left Edge */}
      <div
        className="pointer-events-none absolute bottom-6 left-0 top-6 w-px"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,.45), transparent, rgba(255,255,255,.15))",
        }}
      />

      {/* Right Edge */}
      <div
        className="pointer-events-none absolute bottom-6 right-0 top-6 w-px"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,.15), transparent, rgba(255,255,255,.45))",
        }}
      />

      {/* Bottom Edge */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-10 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,.15), transparent)",
        }}
      />
    </>
  );
}
