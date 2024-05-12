"use client";

import { Button } from "@/components/ui/button";

import { Share, Star, Play } from "lucide-react";
import { useState } from "react";

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

export function PlayButton() {
  // TODO: 播放时间
  return (
    <Button className="text-base">
      <span className="icon-[material-symbols--play-arrow] mr-2 text-3xl" />
      {/* TODO: 防抖 */}
      Play
    </Button>
  );
}
