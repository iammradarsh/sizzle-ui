import Image from "next/image";

interface Props {
  progress: number;
  hoverProgress: number | null;
  showPreview: boolean;

  progressRef: React.RefObject<HTMLDivElement | null>;

  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;

  onMouseEnter: () => void;

  onMouseLeave: () => void;

  onClick: () => void;

  previewImage: string;
}

export default function ReelControls({
  progress,
  hoverProgress,
  showPreview,
  progressRef,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
  onClick,
  previewImage,
}: Props) {
  const displayProgress = hoverProgress ?? progress;
  return (
    <div
      className="
absolute
bottom-4
left-4
right-4
"
    >
      {showPreview && hoverProgress !== null && (
        <div
          className="
      absolute
      bottom-2
      w-[96px]
      overflow-hidden
      shadow-xl
      -translate-x-1/2
      
    "
          style={{
            left: `${hoverProgress}%`,
          }}
        >
          {/* Preview Image */}
          <div
            className="
    rounded-[15px]
    bg-white/20
    p-[2px]
  "
          >
            <div
              className="
      relative
      h-[150px]
      overflow-hidden
      rounded-[15px]
    "
            >
              <Image
                src={previewImage}
                alt="preview"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Time */}
          <div
            className="
        flex
        h-10
        items-center
        justify-center
        
      "
          >
            <span className="font-neue-medium text-[12px] text-white">
              1:34 / 6:03
            </span>
          </div>
        </div>
      )}
      <div
        ref={progressRef}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className="relative h-2 cursor-pointer"
      >
        {/* Track */}
        <div className="h-2 w-full rounded-full bg-white/20" />

        {/* Progress */}
        <div
          className="
      absolute
      left-0
      top-0
      h-full
      rounded-full
      bg-[linear-gradient(270deg,#D9107F_0%,#EE1E03_29.33%,#F61785_57.21%,#FC7C20_100%)]
    "
          style={{
            width: `${displayProgress}%`,
          }}
        />

        {/* Thumb */}
        <div
          className="
absolute
top-1/2
-translate-y-1/2
"
          style={{
            left: `calc(${displayProgress}% - 8px)`,
          }}
        >
          <div
            className="
absolute
left-1/2
top-1/2
h-8
w-8
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-[#D9107F]/30

"
          />

          <div
            className="
relative
h-4
w-4
rounded-full
border-2
border-white/20
bg-white
"
          />
        </div>
      </div>
    </div>
  );
}
