"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Slider } from "@/components/ui/slider";
import { toTime } from "@/lib/time";
import { SongCover } from "@/components/main/cover.client";
import { useSong } from "@/hooks/song";
import Link from "next/link";

export function Player() {
  const id = "12";
  const { song, error, isLoading } = useSong(id);

  const [time, setTime] = useState(0);
  // 进度
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(100);

  const [isPlaying, setIsPlaying] = useState(true);

  const handleTimeChange = (value: number[]) => {
    setTime(() => value[0]);
  };

  const handleTimeCommit = (value: number[]) => {
    console.log(value);
    setProgress(() => value[0]);
  };

  const handlePlay = () => {
    setTime((s) => s + 10);
  };

  useEffect(() => {
    if (!isPlaying) {
      return;
    } else if (time >= duration) {
      setTime(0);
    } else {
      const interval = setInterval(() => {
        setTime((s) => s + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div
      className="flex h-20  items-center  justify-between space-x-5 rounded 
    bg-primary-foreground px-20 backdrop-blur"
    >
      <div className="flex flex-1 items-center space-x-5">
        <Link href={`/song/${id}`}>
          <SongCover id={id} size={60} />
        </Link>

        <div className="flex flex-col">
          <Button variant={"link"} className="pl-0" asChild>
            <Link
              className="text-xl underline-offset-4  hover:underline"
              href={`/song/${id}`}
            >
              {song?.name}
            </Link>
          </Button>
          <span>{song?.singer.name}</span>
        </div>
      </div>

      <div className="flex grow flex-col items-center justify-center pt-4">
        <div className="flex grow items-center justify-center space-x-5">
          <span>{toTime(time)}</span>
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
        <div className="flex items-center justify-center space-x-5">
          <PlayButton onClick={handlePlay} />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end space-x-5">
        <VolumeButton />

        <Button variant={"ghost"} size={"icon"}>
          <span
            className="icon-[material-symbols--playlist-play-rounded]
            text-3xl"
          />
        </Button>
      </div>
    </div>
  );
}

export function VolumeButton() {
  const [state, setState] = useState(true);

  const handleClick = () => {
    setState((s) => !s);
  };
  return (
    <Button
      className="text-base"
      variant={"ghost"}
      size={"icon"}
      onClick={handleClick}
    >
      {state ? (
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

export function PlayButton({ onClick }: { onClick: () => void }) {
  const [state, setState] = useState(true);

  const handleClick = () => {
    setState((s) => !s);
  };

  // TODO: 播放时间
  return (
    <>
      <Button className="text-base" variant={"ghost"} size={"icon"}>
        <span
          className="icon-[material-symbols--skip-previous-rounded]
          text-3xl"
        />
      </Button>
      <Button
        className="text-base"
        variant={"ghost"}
        size={"icon"}
        onClick={() => {
          handleClick();
          onClick();
        }}
      >
        {state ? (
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
      <Button className="text-base" variant={"ghost"} size={"icon"}>
        <span
          className="icon-[material-symbols--skip-next-rounded]
          text-3xl"
        />
      </Button>
    </>
  );
}
