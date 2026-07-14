"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: "/images/icons/home.svg",
  },
  {
    label: "Explore",
    href: "/explore",
    icon: "/images/icons/explore.svg",
  },
  {
    label: "Search",
    href: "/search",
    icon: "/images/icons/search.svg",
  },
  {
    label: "Leaderboard",
    href: "/leaderboard",
    icon: "/images/icons/leaderboard.svg",
  },
  {
    label: "My Stuff",
    href: "/my-stuff",
    icon: "/images/icons/my-stuff.svg",
  },
];

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
      <Card
        className="
    flex
    flex-row
    items-center

    gap-2

    rounded-[34px]
    border
    border-white/5

    

    glass-card

    px-4
    py-3

    shadow-2xl
    backdrop-blur-xl
  "
      >
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link key={item.label} href={item.href}>
              <Button
                variant="ghost"
                className={`
relative
overflow-hidden

h-20
px-8

rounded-[24px]

flex
flex-col
items-center
justify-center

${active ? "text-white" : "text-zinc-400 hover:text-white"}
`}
              >
                {active && (
                  <motion.div
                    layoutId="active-navbar"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 40,
                    }}
                    className="absolute inset-0 rounded-[24px] bg-[#313135]"
                  />
                )}

                <motion.div
                  className="relative z-10 flex flex-col items-center gap-2"
                  animate={{
                    scale: active ? 1 : 0.95,
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                  />

                  <span>{item.label}</span>
                </motion.div>
              </Button>
            </Link>
          );
        })}
      </Card>
    </div>
  );
}
