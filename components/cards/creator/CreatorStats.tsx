import Image from "next/image";

interface Props {
  videos: number;
  posts: number;
}

export default function CreatorStats({ videos, posts }: Props) {
  return (
    <div className="mt-2 flex items-center gap-4 text-sm text-zinc-400">
      <div className="flex items-center gap-1">
        <Image src="/images/icons/gallery.svg" alt="" width={14} height={14} />
        {videos}
      </div>

      <div className="flex items-center gap-1">
        <Image src="/images/icons/play.svg" alt="" width={14} height={14} />
        {posts}
      </div>
    </div>
  );
}
