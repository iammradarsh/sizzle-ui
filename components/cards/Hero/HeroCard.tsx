import Image from "next/image";

export interface HeroCardProps {
  image: string;
  badge?: string;
  movieLogo?: string;
  category: string;
  title: string;

  statType: "movie" | "creator";

  movieStats?: {
    quality: string;
    duration: string;
    tag: string;
  };

  creatorStats?: {
    views: number;
    videos: number;
    likes: number;
  };

  description: string;
  creator: string;
  creatorViews: string;
  time: string;
}

export default function HeroCard({
  image,
  badge,
  movieLogo,
  category,
  title,

  statType,
  movieStats,
  creatorStats,

  description,
  creator,
  creatorViews,
  time,
}: HeroCardProps) {
  return (
    <div className="group w-full rounded-lg p-4 transition-colors duration-300 hover:bg-[#19191B]">
      {/* IMAGE CARD */}
      <div className="relative h-[420px] overflow-hidden rounded-md">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 90vw, 46vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-all duration-300" />

        <div className="absolute inset-[24px] z-10 pointer-events-none">
          <Image
            src="/images/HeroCardFrame.png"
            alt="Frame"
            fill
            className="object-fill"
          />
        </div>

        <div className="absolute inset-0 z-20 flex flex-col px-12 pt-10 pb-12">
          {/* Badge */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wide text-white">
              {badge && (
                <Image
                  src={badge}
                  alt="Badge"
                  width={110}
                  height={50}
                  className="mb-5 h-auto w-[110px]"
                />
              )}
            </div>
          </div>

          {/* Bottom Content */}
          <div className="mt-auto">
            {movieLogo && (
              <Image
                src={movieLogo}
                alt="Movie Logo"
                width={110}
                height={50}
                className="mb-5 h-auto w-[110px]"
              />
            )}

            <p className="mb-2 text-xl font-neue-semibold uppercase tracking-[0.2em] text-white">
              {category}
            </p>

            <h2 className="text-4xl font-black uppercase leading-[0.9] text-white font-neue-black">
              {title}
            </h2>

            <div className="mt-6">
              {statType === "creator" ? (
                <div className="flex items-center gap-5 text-white">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/icons/gallery.svg"
                      alt="Gallery"
                      width={18}
                      height={18}
                    />
                    <span>{creatorStats?.views}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/icons/play.svg"
                      alt="Videos"
                      width={18}
                      height={18}
                    />
                    <span>{creatorStats?.videos}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/icons/crown.svg"
                      alt="Likes"
                      width={18}
                      height={18}
                    />
                    <span>{creatorStats?.likes}</span>
                  </div>
                </div>
              ) : (
                <div className="flex gap-3">
                  <span className="rounded-md flex items-center gap-1 bg-black/40 px-3 py-2">
                    <span>{movieStats?.quality}</span>
                    <span>{movieStats?.duration}</span>
                  </span>

                  <span className="rounded-md bg-black/40 px-3 py-2">
                    {movieStats?.tag}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-5 px-2">
        <p className="line-clamp-2 text-lg text-white">{description}</p>

        <div className="mt-3 flex items-center gap-2 text-sm text-zinc-400">
          <span>{creator}</span>
          <span className="flex items-center gap-1">
            <span>
              <Image
                src="/images/icons/eye.svg"
                alt="Views"
                width={12}
                height={12}
              />
            </span>

            <span>{creatorViews}</span>
          </span>

          <span>•</span>

          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
