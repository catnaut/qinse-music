import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getRemotePlaceholder } from "@/lib/blur";
import { Skeleton } from "@/components/ui/skeleton";
import { getSongById } from "@/actions/song";

export async function Cover({
  src,
  placeholder,
  size,
  button = false,
}: {
  src: string;
  placeholder: string;
  size: number;
  button?: boolean;
}) {
  const picSize = {
    width: size,
    height: size,
  };

  return (
    <div className="group relative">
      <Image
        src={src}
        {...picSize}
        alt="cover"
        className="relative rounded-lg object-contain"
        placeholder="blur"
        blurDataURL={placeholder}
      />
      <Image
        src={placeholder}
        alt="shadow"
        {...picSize}
        className="scale-120 absolute left-2 top-2 -z-10 rounded-lg opacity-40
        blur-lg transition group-hover:opacity-70"
      />
      {/* TODO: 接入客户端播放按键 */}
      {button && (
        <Button
          className="
        pointer-events-none absolute left-1/2 top-1/2 flex h-16 w-16
        -translate-x-1/2 -translate-y-1/2 items-center
        justify-center rounded-full bg-transparent
        text-primary-foreground/75 opacity-0 backdrop-blur
        transition
        hover:bg-primary-foreground/30 hover:text-primary-foreground/75
        group-hover:pointer-events-auto group-hover:opacity-100"
          size={"icon"}
          variant={"ghost"}
        >
          <span
            className="
            icon-[material-symbols--play-circle-outline] text-5xl "
          ></span>
        </Button>
      )}
    </div>
  );
}

export function CoverSkeleton({ size }: { size: number }) {
  return <Skeleton className={`h-[${size}px] w-[${size}px]`} />;
}
