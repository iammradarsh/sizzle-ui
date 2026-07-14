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
      <Image
        src={logo}
        alt="Logo"
        width={110}
        height={40}
        className="mb-6 h-auto w-auto"
      />

      {/* Name */}
      <h1 className="font-neue-black text-[86px] leading-[0.9] uppercase text-white">
        {name.split(" ").map((word) => (
          <span key={word} className="block">
            {word}
          </span>
        ))}
      </h1>

      {/* Bio */}
      <p className="mt-6 text-[20px] text-white/80">{bio}</p>

      {/* Buttons */}
      <div className="mt-10 flex items-center gap-4">
        {/* View Profile */}
        <button
          className="
            flex
            h-14
            items-center
            gap-3
            rounded-2xl
            bg-white
            px-6
            text-[16px]
            font-neue-semibold
            text-black
            transition
            hover:bg-white/90
          "
        >
          <Image
            src="/images/icons/profile.svg"
            alt=""
            width={18}
            height={18}
          />
          View profile
        </button>

        {/* Tip */}
        <button
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-white/15
            backdrop-blur-md
            transition
            hover:bg-white/20
          "
        >
          <Image src="/images/icons/gift.svg" alt="" width={22} height={22} />
        </button>

        {/* Follow */}
        <button
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-white/15
            backdrop-blur-md
            transition
            hover:bg-white/20
          "
        >
          <Image src="/images/icons/plus.svg" alt="" width={22} height={22} />
        </button>
      </div>
    </div>
  );
}
