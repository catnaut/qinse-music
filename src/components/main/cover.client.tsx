"use client";

import React from "react";
import { useSong } from "@/hooks/song";
import { Cover, CoverSkeleton } from "@/components/main/cover";

export function SongCover({ size, id }: { size: number; id: string }) {
  const { song, error, isLoading } = useSong(id);

  if (error) return <p>Error: {error.message}</p>;
  else if (isLoading) return <CoverSkeleton size={size} />;

  return <Cover size={size} src={song!.pic} placeholder={""} button />;
}
