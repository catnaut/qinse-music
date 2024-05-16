import { Cover, CoverSkeleton } from "@/components/main/cover";
import { LikeButton, PlayButton } from "@/components/playlist/button.client";
import { MoreMenu } from "@/components/playlist/button";
import { Suspense } from "react";
import { getSongById } from "@/actions/song";

export default async function Page({ params }: { params: { id: string } }) {
  const song = await getSongById(params.id);

  return (
    <div
      className="h-2/50 static flex w-full items-center justify-between
    space-x-20 pt-10"
    >
      <Suspense fallback={<CoverSkeleton />}>
        <Cover />
      </Suspense>
      <div className="flex flex-grow flex-col space-y-8 py-10 pl-20">
        <h1 className="text-5xl">{song.name}</h1>
        <div className="flex flex-col space-y-2">
          <p>By {song.singerId}</p>
          <p className="line-clamp-2  w-2/3 text-ellipsis">
            {song.introduction}
          </p>
        </div>
        <div className="flex items-center justify-start space-x-2">
          <PlayButton />
          <LikeButton />
          <MoreMenu />
        </div>
      </div>
    </div>
  );
}
