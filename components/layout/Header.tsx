import Image from "next/image";

import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black px-8 py-6">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <Button className="h-11 rounded-lg bg-white px-5 text-black hover:[#DFDCD7]">
            <Image
              src="/images/icons/foryou.svg"
              alt="For You"
              width={18}
              height={18}
              className="mr-2 h-[18px] w-[18px]"
            />
            For You
          </Button>

          <Button
            variant="secondary"
            className="group h-11 rounded-lg border-0 bg-[#19191B] px-5 text-zinc-300 hover:bg-[#252528] hover:text-white"
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
            className="group h-11 rounded-lg border-0 bg-[#19191B] px-5 text-zinc-300 hover:bg-[#252528] hover:text-white"
          >
            <Image
              src="/images/icons/crown-grey.svg"
              alt="Memberships"
              width={18}
              height={18}
              className="mr-2 h-[18px] w-[18px] group-hover:hidden"
            />
            <Image
              src="/images/icons/crown.svg"
              alt="Memberships"
              width={18}
              height={18}
              className="mr-2 hidden h-[18px] w-[18px] group-hover:block"
            />
            Memberships
          </Button>
        </div>

        {/* Center */}
        <Image
          src="/images/SizzleLogo.svg"
          alt="Sizzle"
          width={120}
          height={40}
          className="h-auto w-[120px]"
        />

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Create */}
          <Button className="relative h-11 overflow-hidden rounded-lg border-0 px-6 text-white">
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
                width={18}
                height={18}
                className="mr-2 h-[18px] w-[18px]"
              />
              Create
            </span>
          </Button>

          {/* Chat */}
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-lg border-[#2B2B2E] bg-black hover:bg-[#19191B]"
          >
            <Image
              src="/images/icons/chat.svg"
              alt="Chat"
              width={20}
              height={20}
            />
          </Button>

          {/* Notification */}
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-lg border-[#2B2B2E] bg-black hover:bg-[#19191B]"
          >
            <Image
              src="/images/icons/bell.svg"
              alt="Notifications"
              width={20}
              height={20}
            />
          </Button>

          {/* Wallet */}
          <Button
            variant="outline"
            className="h-11 rounded-lg border-[#2B2B2E] bg-black px-4 hover:bg-[#19191B]"
          >
            <Image
              src="/images/icons/wallet.svg"
              alt="Wallet"
              width={18}
              height={18}
              className="mr-2 h-[18px] w-[18px]"
            />
            <span className="font-neue-semibold">1280.55</span>
          </Button>

          {/* Avatar */}
          <Avatar className="h-11 w-11 border border-zinc-700">
            <AvatarImage src="/images/avatar.png" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
