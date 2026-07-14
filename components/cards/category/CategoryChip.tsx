"use client";

interface Props {
  label: string;

  active?: boolean;

  onClick?: () => void;
}

export default function CategoryChip({
  label,
  active = false,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        shrink-0
        rounded-full
        border
        px-6
        py-3
        text-sm
        font-neue-medium
        transition-all
        duration-300
        ${
          active
            ? "border-[#2A2A2E] bg-[#1D1D1F] text-white"
            : "border-white/10 bg-transparent text-white hover:border-white/20 hover:bg-[#28282A]"
        }
      `}
    >
      {label}
    </button>
  );
}
