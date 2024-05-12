import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Cover({ src }: { src: string }) {
  const imgSrc = src || "/cover.jpg";
  return (
    <div className="group relative h-[400] w-[400]">
      <Image
        src={imgSrc}
        alt="cover"
        width={400}
        height={400}
        className="relative rounded-lg"
      />
      {/* TODO: 确认 quality 参数有没有效果 */}
      {/* TODO: 取消组件自带的 placeholder  */}
      <Image
        src={imgSrc}
        alt="shadow"
        width={400}
        height={400}
        quality={1}
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
