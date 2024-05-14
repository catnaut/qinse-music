import { Cover, CoverSkeleton } from "@/components/main/cover";
import { LikeButton, PlayButton } from "@/components/playlist/button.client";
import { MoreMenu } from "@/components/playlist/button";
import { Suspense } from "react";

export default async function Page() {
  const author = "author";
  const updateAt = Date.now();
  const amount = 0;
  const description = "description";
  const imgSrc = "/cover.jpg";

  return (
    <main className=" flex flex-col items-center px-40  pt-20">
      <div
        className="h-2/50 static flex w-full items-center justify-between
        space-x-20 pt-10"
      >
        <Suspense fallback={<CoverSkeleton />}>
          <Cover src={imgSrc} />
        </Suspense>
        <div className=" flex min-h-full flex-grow flex-col space-y-5 py-10">
          <h1 className="text-5xl">Playlist</h1>
          <p>By {author}</p>
          <p>
            Update at {updateAt} - {amount} songs
          </p>
          <p className="text-sm">{description}</p>
          <div className="flex items-center justify-start space-x-2">
            <PlayButton />
            <LikeButton />
            <MoreMenu />
          </div>
        </div>
      </div>
      {/* TODO: 歌曲表格 */}
    </main>
  );
}
