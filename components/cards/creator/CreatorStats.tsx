import Image from "next/image";

interface Props {
  videos: number;
  posts: number;
}

export default function CreatorStats({ videos, posts }: Props) {
  return (
    <div className="mt-1.5 flex items-center gap-4 text-sm text-zinc-400">
      <div className="flex items-center gap-1">
        <Image
          src="/images/icons/gallery-grey.svg"
          alt=""
          width={12}
          height={12}
        />
        <span className="text-sm font-neue-regular">{videos}</span>
      </div>

      <div className="flex items-center gap-1">
        <Image
          src="/images/icons/play-grey.svg"
          alt=""
          width={12}
          height={12}
        />
        <span className="text-sm font-neue-regular">{posts}</span>
      </div>
    </div>
  );
}
