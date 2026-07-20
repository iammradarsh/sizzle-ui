import Image from "next/image";

import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black px-8 py-6">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <Button className="h-[44px] rounded-[14px] font-neue-semibold font-normal bg-white px-5 text-[14px] text-black hover:[#DFDCD7]">
            <Image
              src="/images/icons/foryou.svg"
              alt="For You"
              width={16}
              height={16}
              className="mr-2 h-[16px] w-[16px]"
            />
            For You
          </Button>

          <Button
            variant="secondary"
            className="group h-[44px] rounded-[14px] font-neue-semibold font-normal border-0 bg-[#19191B] px-5 text-[14px] text-zinc-300 hover:bg-[#252528] hover:text-white"
          >
            <Image
              src="/images/icons/following-grey.svg"
              alt="Following"
              width={18}
              height={18}
              className="mr-2 h-[18px] w-[18px] group-hover:hidden"
            />
            <Image
              src="/images/icons/following.svg"
              alt="Following"
              width={18}
              height={18}
              className="mr-2 hidden h-[18px] w-[18px] group-hover:block"
            />
            Following
          </Button>

          <Button
            variant="secondary"
            className="group h-[44px] rounded-[14px] font-neue-semibold font-normal border-0 bg-[#19191B] px-5 text-[14px] text-zinc-300 hover:bg-[#252528] hover:text-white"
          >
            <Image
              src="/images/icons/crown-grey.svg"
              alt="Memberships"
              width={18}
              height={18}
              className="mr-[6px] h-[18px] w-[18px] group-hover:hidden"
            />
            <Image
              src="/images/icons/crown.svg"
              alt="Memberships"
              width={18}
              height={18}
              className="mr-[6px] hidden h-[18px] w-[18px] group-hover:block"
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
          <Button className="relative h-[44px] overflow-hidden rounded-[14px] border-0 px-6 text-white">
            <Image
              src="/images/CreateButtonBG.png"
              alt=""
              fill
              priority
              className="object-cover"
            />

            <span className="relative z-10 flex items-center font-neue-semibold">
              <Image
                src="/images/icons/plus.svg"
                alt="Create"
                width={14}
                height={14}
                className="mr-2 h-[14px] w-[14px]"
              />
              Create
            </span>
          </Button>

          {/* Chat */}
          <Button
            variant="outline"
            size="icon"
            className="h-[44px] w-[44px] rounded-[14px] border-[rgba(255, 255, 255, 0.2)] bg-[rgba(0, 0, 0, 0.25)] hover:bg-[#19191B]"
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
