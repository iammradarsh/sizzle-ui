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
  rounded-lg
  border
  px-6
  py-2
  font-neue-medium
  text-[17px]
  transition-all
  duration-200

  ${
    active
      ? `
        border-white
        bg-white
        text-black
      `
      : `
        border-[#303033]
        bg-transparent
        text-white
        hover:border-[#3A3A3E]
        hover:bg-[#1F1F22]
      `
  }
`}
    >
      {label}
    </button>
  );
}
