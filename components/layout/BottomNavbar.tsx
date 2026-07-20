"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const navItems = [
  {
    label: "Home",
    icon: "/images/icons/home-grey.svg",
    activeIcon: "/images/icons/home.svg",
  },
  {
    label: "Explore",
    icon: "/images/icons/explore-grey.svg",
    activeIcon: "/images/icons/explore.svg",
  },
  {
    label: "Search",
    icon: "/images/icons/search-grey.svg",
    activeIcon: "/images/icons/search.svg",
  },
  {
    label: "Leaderboard",
    icon: "/images/icons/leaderboard-grey.svg",
    activeIcon: "/images/icons/leaderboard.svg",
  },
  {
    label: "My Stuff",
    icon: "/images/icons/my-stuff-grey.svg",
    activeIcon: "/images/icons/my-stuff.svg",
  },
];

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
      <div
        className="
          flex
          items-center
          justify-center
          gap-2
          rounded-[34px]
          border
                glass-card
          h-22.5
          w-[580px]
          backdrop-blur-xl
        "
      >
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
                transition-colors
              "
            >
              {active && (
                <motion.div
                  layoutId="active-tab"
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                  }}
                  className="absolute inset-0 rounded-[22px] bg-white/10"
                />
              )}

              <div className="relative z-10 flex flex-col items-center gap-1">
                <Image
                  src={active ? item.activeIcon : item.icon}
                  alt={item.label}
                  width={22}
                  height={22}
                />

                <span
                  className={`font-neue-regular text-xs transition-colors ${
                    active ? "text-white" : "text-zinc-400"
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
  );
}
