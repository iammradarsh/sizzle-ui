"use client";

import Image from "next/image";

interface Props {
  likes: number;

  comments: number;
}

export default function ReelActions({ likes, comments }: Props) {
  return (
    <div
      className="
absolute
right-4
top-70
-translate-y-1/2
opacity-0
group-hover:opacity-100
group-focus-within:opacity-100
flex
flex-col
items-center
gap-5
"
    >
      <button>
        <Image src="/images/icons/heart.svg" alt="" width={28} height={28} />

        <p className="mt-1 text-xs">{likes}</p>
      </button>

      <button>
        <Image src="/images/icons/comment.svg" alt="" width={28} height={28} />

        <p className="mt-1 text-xs">{comments}</p>
      </button>

      <button>
        <Image src="/images/icons/gift.svg" alt="" width={28} height={28} />
        <p className="mt-1 text-xs">Gift</p>
      </button>

      <button>
        <Image src="/images/icons/save.svg" alt="" width={28} height={28} />
        <p className="mt-1 text-xs">Save</p>
      </button>

      <button>
        <Image src="/images/icons/more.svg" alt="" width={28} height={28} />
      </button>
    </div>
  );
}
