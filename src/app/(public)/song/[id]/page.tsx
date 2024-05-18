import { SongCover } from "@/components/song/cover";
import { CoverSkeleton } from "@/components/main/cover";
import { LikeButton, PlayButton } from "@/components/playlist/button.client";
import { MoreMenu } from "@/components/playlist/button";
import { getSongById } from "@/actions/song";

export default async function Page({ params }: { params: { id: string } }) {
  const song = await getSongById(params.id);

  return (
    <div className="flex flex-col  items-center justify-center ">
      <div
        className="flex h-80 w-full items-center justify-center
        space-x-28 pt-5"
      >
        <SongCover id={params.id} size={288} />
        <div className="flex  flex-col space-y-8 py-10 pt-5">
          <h1 className="text-5xl">{song.name}</h1>
          <div className="flex flex-col space-y-2">
            <p>By {song.singerId}</p>
            <p className="line-clamp-3 max-w-xl	 text-ellipsis">
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
      {/* 歌词 */}
    </div>
  );
}
