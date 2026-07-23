import Image from "next/image";

import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full  px-8 py-6 bg-gradient-to-b from-black/50 via-black/40 to-black/0 backdrop-blur-xs">
      <div className="z-10 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <Button className="flex items-center justify-center h-[44px] w-[107px] rounded-[14px] font-neue-semibold font-normal bg-white text-[14px] text-black hover:[#DFDCD7] border-none">
            <Image
              src="/images/icons/foryou.svg"
              alt="For You"
              width={16}
              height={16}
              className=" h-[16px] w-[16px]"
            />
            For You
          </Button>

          <Button className="group flex items-center justify-center h-[44px] w-[120px] rounded-[14px] font-neue-semibold font-normal border-0 bg-[#19191B] text-[14px] text-zinc-300 hover:bg-[#252528] hover:text-white">
            <Image
              src="/images/icons/following-grey.svg"
              alt="Following"
              width={16}
              height={16}
              className=" h-[16px] w-[16px] group-hover:hidden"
            />
            <Image
              src="/images/icons/following.svg"
              alt="Following"
              width={16}
              height={16}
              className=" hidden h-[16px] w-[16px] group-hover:block"
            />
            Following
          </Button>

          <Button className="group flex items-center justify-center h-[44px] w-[147px] rounded-[14px] font-neue-semibold font-normal border-0 bg-[#19191B] text-[14px] text-zinc-300 hover:bg-[#252528] hover:text-white">
            <Image
              src="/images/icons/crown-grey.svg"
              alt="Memberships"
              width={16}
              height={16}
              className=" h-[16px] w-[16px] group-hover:hidden"
            />
            <Image
              src="/images/icons/crown.svg"
              alt="Memberships"
              width={16}
              height={16}
              className=" hidden h-[16px] w-[16px] group-hover:block"
            />
            Memberships
          </Button>
        </div>

        {/* Center */}
        <Image
          src="/images/SizzleLogo.svg"
          alt="Sizzle"
          width={112}
          height={32}
          className="h-auto w-[112px]"
        />

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Create */}
          <Button className="flex items-center justify-center font-neue-semibold relative h-[44px] w-[110px] overflow-hidden rounded-[14px] border-0 text-white">
            <Image
              src="/images/CreateButtonBG.png"
              alt=""
              fill
              priority
              className="object-cover"
            />

            <span className="relative z-10 flex items-center gap-[6px] justify-center font-neue-semibold text-[14px]">
              <Image
                src="/images/icons/plus.svg"
                alt="Create"
                width={14}
                height={14}
                className="h-[14px] w-[14px]"
              />
              Create
            </span>
          </Button>

          {/* Chat */}
          <Button
            variant="outline"
            size="icon"
            className="h-[44px] w-[44px] rounded-[14px] border-[rgba(255, 255, 255, 0.2)] bg-black/25 backdrop-blur-2xl hover:bg-[#19191B]"
          >
            <Image
              src="/images/icons/chat.svg"
              alt="Chat"
              width={16}
              height={16}
            />
          </Button>

          {/* Notification */}
          <Button
            variant="outline"
            size="icon"
            className="h-[44px] w-[44px] rounded-[14px] border-[rgba(255, 255, 255, 0.2)] bg-[rgba(0, 0, 0, 0.25)] hover:bg-[#19191B]"
          >
            <Image
              src="/images/icons/bell.svg"
              alt="Notifications"
              width={16}
              height={16}
            />
          </Button>

          {/* Wallet */}
          <Button
            variant="outline"
            className="h-[44px] w-[100px] rounded-[14px] border-[rgba(255, 255, 255, 0.2)] bg-[rgba(0, 0, 0, 0.25)] hover:bg-[#19191B]"
          >
            <Image
              src="/images/icons/wallet.svg"
              alt="Wallet"
              width={14}
              height={14}
              className=" h-[14px] w-[14px]"
            />
            <span className="font-neue-semibold font-normal text-[14px]">
              1280.55
            </span>
          </Button>

          {/* Avatar */}
          <Avatar className="h-[44px] w-[44px] rounded-[14px] border-[rgba(255, 255, 255, 0.2)]">
            <AvatarImage src="/images/avatar.png" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
