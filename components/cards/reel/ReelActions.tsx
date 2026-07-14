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
top-1/2
hidden
-translate-y-1/2
group-hover:flex
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
      </button>

      <button>
        <Image src="/images/icons/save.svg" alt="" width={28} height={28} />
      </button>

      <button>
        <Image src="/images/icons/more.svg" alt="" width={28} height={28} />
      </button>
    </div>
  );
}
