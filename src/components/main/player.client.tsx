"use client";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { Slider } from "@/components/ui/slider";
import { toTime } from "@/lib/time";
import { SongCover } from "@/components/main/cover.client";
import Link from "next/link";
import usePlayerStore from "@/stores/player";
import { Skeleton } from "@/components/ui/skeleton";

export function Player() {
  return (
    <div
      className="flex h-20  items-center  justify-between space-x-5 rounded
    bg-primary-foreground px-20 backdrop-blur"
    >
      <div className="flex flex-1 items-center space-x-5">
        <SongInfo />
      </div>

      <div className="flex grow flex-col items-center justify-center pt-4">
        <Progress />
        <ControlButtons />
      </div>

      <div className="flex flex-1 items-center justify-end space-x-5">
        <VolumeButton />
        <PlaylistButton />
      </div>
    </div>
  );
}

export function Progress() {
  // time 用于显示, progress 是音乐播放进度
  const time = usePlayerStore((state) => state.time);
  const progress = usePlayerStore((state) => state.progress);
  const duration = usePlayerStore((state) => state.duration);
  const setTime = usePlayerStore((state) => state.setTime);
  const setProgress = usePlayerStore((state) => state.setProgress);

  const handleTimeChange = (value: number[]) => {
    setTime(value[0]);
  };

  const handleTimeCommit = (value: number[]) => {
    setProgress(value[0]);
  };

  return (
    <div className="flex grow items-center justify-center space-x-5">
      <span>{toTime(progress)}</span>
      <Slider
        value={[time]}
        max={duration}
        step={1}
        onValueChange={handleTimeChange}
        onValueCommit={handleTimeCommit}
        className="w-80"
      />
      <span>{toTime(duration)}</span>
    </div>
  );
}

export function VolumeButton() {
  const volume = usePlayerStore((state) => state.volume);
  const muteToggle = usePlayerStore((state) => state.muteToggle);

  return (
    <Button
      className="text-base"
      variant={"ghost"}
      size={"icon"}
      onClick={muteToggle}
    >
      {volume > 0 ? (
        <span
          className="icon-[material-symbols--volume-up-rounded]
          text-3xl"
        />
      ) : (
        <span
          className="icon-[material-symbols--volume-off-rounded]
          text-3xl"
        />
      )}
    </Button>
  );
}

export function ControlButtons() {
  const state = usePlayerStore((state) => state.state);
  const toggle = usePlayerStore((state) => state.toggle);
  const prev = usePlayerStore((state) => state.prev);
  const next = usePlayerStore((state) => state.next);

  const increment = usePlayerStore((state) => state.increment);

  useEffect(() => {
    const interval = setInterval(() => {
      if (state !== "play") return;
      increment();
    }, 1000);
    return () => clearInterval(interval);
  }, [state, increment]);
  return (
    <div className="flex items-center justify-center space-x-5">
      <Button
        className="text-base"
        variant={"ghost"}
        size={"icon"}
        onClick={prev}
      >
        <span
          className="icon-[material-symbols--skip-previous-rounded]
          text-3xl"
        />
      </Button>
      <Button
        className="text-base"
        variant={"ghost"}
        size={"icon"}
        onClick={toggle}
      >
        {state === "pause" ? (
          <span
            className="icon-[material-symbols--play-arrow-rounded]
            text-3xl transition"
          />
        ) : (
          <span
            className="icon-[material-symbols--pause-rounded]
            text-3xl transition"
          />
        )}
      </Button>
      <Button
        className="text-base"
        variant={"ghost"}
        size={"icon"}
        onClick={next}
      >
        <span
          className="icon-[material-symbols--skip-next-rounded]
          text-3xl"
        />
      </Button>
    </div>
  );
}

export function PlaylistButton() {
  const removeSong = usePlayerStore((state) => state.removeSong);
  const handleClick = () => {
    // 随便传一个 id
    removeSong("");
  };

  return (
    <Button variant={"ghost"} size={"icon"} onClick={handleClick}>
      <span
        className="icon-[material-symbols--playlist-play-rounded]
        text-3xl"
      />
    </Button>
  );
}

export function SongInfo() {
  const song = usePlayerStore((state) => state.song);
  console.log(song);
  return (
    <>
      {!song ? (
        <Skeleton className="h-[60px] w-[60px] rounded-lg" />
      ) : (
        <Link href={`/song/${song.id}`}>
          <SongCover id={`${song.id}`} size={60} />
        </Link>
      )}

      <div className="flex flex-col">
        <Button variant={"link"} className="pl-0" asChild>
          {!song ? (
            <>
              <span>暂无歌曲</span>
              <span></span>
            </>
          ) : (
            <>
              <Link
                className="text-xl underline-offset-4  hover:underline"
                href={`/song/${song.id}`}
              >
                {song?.name}
              </Link>
              <span>{song.singer.name}</span>
            </>
          )}
        </Button>
      </div>
    </>
  );
}
