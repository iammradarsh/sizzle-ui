"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  {
    label: "Home",
    icon: "/images/icons/home-grey.svg",
    activeIcon: "/images/icons/home.svg",
    width: 26,
    height: 22,
  },
  {
    label: "Explore",
    icon: "/images/icons/explore-grey.svg",
    activeIcon: "/images/icons/explore.svg",
    width: 22,
    height: 22,
  },
  {
    label: "Search",
    icon: "/images/icons/search-grey.svg",
    activeIcon: "/images/icons/search.svg",
    width: 20,
    height: 20,
  },
  {
    label: "Leaderboard",
    icon: "/images/icons/leaderboard-grey.svg",
    activeIcon: "/images/icons/leaderboard.svg",
    width: 22,
    height: 22,
  },
  {
    label: "My Stuff",
    icon: "/images/icons/my-stuff-grey.svg",
    activeIcon: "/images/icons/my-stuff.svg",
    width: 18,
    height: 22,
  },
];

export default function BottomNavigation2() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
      <div
        className="
    flex h-[90px] w-[580px] items-center justify-center rounded-[34px]
    border border-white/10
    bg-[#19191BBF]
    backdrop-blur-md
    shadow-[0_8px_30px_rgba(0,0,0,0.35)]
  "
      >
        <div className="flex h-full items-center justify-center px-3">
          {navItems.map((item) => {
            const active = activeTab === item.label;

            return (
              <button
                key={item.label}
                onClick={() => setActiveTab(item.label)}
                className="
            relative
            flex
            h-[60px]
            min-w-[100px]
            flex-col
            items-center
            justify-center
            overflow-hidden
            rounded-[22px]
          "
              >
                {active && (
                  <div
                    className="
      absolute inset-0 rounded-[22px]
      border border-white/10
      bg-white/10
      backdrop-blur-xl
    "
                  />
                )}

                <div className="relative z-20 flex flex-col items-center gap-[4px]">
                  <Image
                    src={active ? item.activeIcon : item.icon}
                    alt={item.label}
                    width={item.width}
                    height={item.height}
                  />

                  <span
                    className={`font-neue-regular text-xs transition-colors ${
                      active ? "text-white" : "text-[#A3A3A3]"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
