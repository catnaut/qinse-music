import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getRemotePlaceholder } from "@/lib/blur";
import { Skeleton } from "@/components/ui/skeleton";

export async function Cover() {
  const src = process.env.TEST_COVER as string;
  const placeholder = await getRemotePlaceholder(src);

  return (
    <div className="group relative h-[400] w-[400]">
      <Image
        src={src}
        alt="cover"
        width={400}
        height={400}
        className="relative rounded-lg"
        placeholder="blur"
        blurDataURL={placeholder}
      />
      <Image
        src={placeholder}
        alt="shadow"
        width={400}
        height={400}
        className="scale-120 absolute left-2 top-2 -z-10 rounded-lg opacity-40
        blur-lg transition group-hover:opacity-70"
      />
      {/* TODO: 接入客户端播放按键 */}
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
    </div>
  );
}

export function CoverSkeleton() {
  return <Skeleton className="h-[400px] w-[400px]" />;
}
