"use client";

interface Props {
  label: string;

  active?: boolean;

  onClick?: () => void;
  className?: string;
}

export default function CategoryChip({
  label,
  active = false,
  onClick,
  className,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
  shrink-0
  rounded-[14px]
  border
  px-5
  h-10
  font-neue-medium
  text-[14px]
  transition-all
  duration-200
  font-neue-semibold
  font-normal
  ${className ?? ""}

  ${
    active
      ? `
        border-white
        bg-white
        text-black
      `
      : `
        border-[#38373B]
        bg-transparent
        text-white
        hover:bg-[#19191B]
      `
  }
`}
    >
      {label}
    </button>
  );
}
