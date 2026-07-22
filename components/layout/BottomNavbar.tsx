"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import LiquidGlass from "../glass/LiquidGlass";

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

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2"
      animate={{
        y: [0, -3, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <LiquidGlass width={580} height={90} cornerRadius={34}>
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
                  <motion.div
                    layoutId="active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34,
                    }}
                    className="
                absolute
                inset-0
                overflow-hidden
                rounded-[22px]
              "
                  >
                    {/* Glass */}
                    <div
                      className="
                  absolute
                  inset-0

                  border
                  border-white/15

                  bg-white/[0.08]

                  backdrop-blur-xl
                  backdrop-saturate-[180%]

                  shadow-[0_6px_18px_rgba(255,255,255,.06),0_8px_18px_rgba(0,0,0,.28)]
                "
                    />

                    {/* Inner highlight */}
                    <div
                      className="absolute inset-[1px] rounded-[21px]"
                      style={{
                        boxShadow:
                          "inset 0 1px 1px rgba(255,255,255,.35), inset 0 -1px 1px rgba(255,255,255,.05)",
                      }}
                    />

                    {/* Top Shine */}
                    <div className="absolute left-4 right-4 top-px h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />

                    {/* Moving Reflection */}
                    <motion.div
                      animate={{
                        x: ["-150%", "180%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                  absolute
                  inset-y-0
                  w-20
                  rotate-[18deg]
                  blur-xl
                "
                      style={{
                        background:
                          "linear-gradient(90deg,transparent,rgba(255,255,255,.22),transparent)",
                      }}
                    />

                    {/* Breathing Glow */}
                    <motion.div
                      animate={{
                        opacity: [0.12, 0.28, 0.12],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                      }}
                      className="
                  absolute
                  inset-0
                  rounded-[22px]
                  bg-[rgba(255, 255, 255, 0.10)]
                  blur-xl
                "
                    />
                  </motion.div>
                )}

                <div className="relative z-20 flex flex-col items-center">
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
      </LiquidGlass>
    </motion.div>
  );
}
