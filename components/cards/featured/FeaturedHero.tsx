"use client";

import Image from "next/image";

interface FeaturedHeroProps {
  logo: string;

  name: string;

  bio: string;
}

export default function FeaturedHero({ logo, name, bio }: FeaturedHeroProps) {
  return (
    <div className="max-w-[460px]">
      {/* Logo */}
      <Image src={logo} alt="Logo" width={120} height={28} className="" />

      {/* Name */}
      <h1 className="font-neue-black text-[120px] leading-25 uppercase text-white">
        {name.split(" ").map((word) => (
          <span key={word} className="block">
            {word}
          </span>
        ))}
      </h1>

      {/* Bio */}
      <p className="mt-5 text-[16px] text-white font-neue-regular">{bio}</p>

      {/* Buttons */}
      <div className="mt-7.5 flex items-center gap-2.5">
        {/* View Profile */}
        <button
          onClick={() => console.log("View Profile")}
          className="
            flex
            items-center
            justify-center
            h-12.5
            w-40
            items-center
            gap-2
            rounded-[16px]
            bg-white
            text-[16px]
            font-neue-semibold
            text-black
            transition
            hover:bg-[#DFDCD7]
          "
        >
          <Image
            src="/images/icons/profile.svg"
            alt=""
            width={16}
            height={16}
          />
          View profile
        </button>

        {/* Tip */}
        <button
          onClick={() => console.log("Tip")}
          className="
            flex
            h-12.5
            w-12.5
            items-center
            justify-center
            rounded-[16px]
            bg-white/20
            backdrop-blur-md
            transition
            hover:bg-white/20
          "
        >
          <Image src="/images/icons/gift.svg" alt="" width={22} height={22} />
        </button>

        {/* Follow */}
        <button
          onClick={() => console.log("Follow")}
          className="
            flex
            h-12.5
            w-12.5
            items-center
            justify-center
            rounded-[16px]
            bg-white/20
            backdrop-blur-md
            transition
            hover:bg-white/20
          "
        >
          <Image src="/images/icons/plus.svg" alt="" width={14} height={14} />
        </button>
      </div>
    </div>
  );
}
