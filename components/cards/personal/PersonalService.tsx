interface PersonalServiceProps {
  title: string;
  price: string;
}

export default function PersonalService({
  title,
  price,
}: PersonalServiceProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-neue-regular text-[14px] text-[#9D9DA3]">
        {title}
      </span>

      <span className="font-neue-regular text-[14px] text-white">{price}</span>
    </div>
  );
}
