"use client";

import { Button } from "@/components/ui/button";

import { useState } from "react";
import usePlayerStore from "@/stores/player";

export function LikeButton() {
  // TODO: API 数据
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Button
      className="text-2xl"
      size={"icon"}
      onClick={() => setIsChecked((c) => !c)}
    >
      {/* TODO: 动画感觉不太自然 */}
      {isChecked ? (
        <span className=" icon-[material-symbols--star] transition " />
      ) : (
        <span className="icon-[material-symbols--star-outline] transition" />
      )}
    </Button>
  );
}

export function SongPlayButton({ id }: { id: string }) {
  const addSong = usePlayerStore((state) => state.playSong);

  // TODO: 播放时间
  const handleClick = () => {
    addSong(id);
  };

  return (
    <Button className="text-base" onClick={handleClick}>
      <span className="icon-[material-symbols--play-arrow] mr-2 text-3xl" />
      {/* TODO: 防抖 */}
      Play
    </Button>
  );
}

export function PlaylistPlayButton({ id }: { id: string }) {
  // const addSong = usePlayerStore((state) => state.playSong);

  const handleClick = () => {
    // addSong(id);
  };

  return (
    <Button className="text-base" onClick={handleClick}>
      <span className="icon-[material-symbols--play-arrow] mr-2 text-3xl" />
      {/* TODO: 防抖 */}
      Play
    </Button>
  );
}
