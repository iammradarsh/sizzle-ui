import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { neuePlakBlack, neuePlakRegular, neuePlakSemiBold } from "@/lib/fonts";

import Header from "@/components/layout/Header";
import BottomNavbar from "@/components/layout/BottomNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sizzle",
  description: "Sizzle Streaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${neuePlakBlack.variable}
        ${neuePlakRegular.variable}
        ${neuePlakSemiBold.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-screen bg-black text-white">
        <Header />

        <main className="flex-1">{children}</main>

        <BottomNavbar />
      </body>
    </html>
  );
}
