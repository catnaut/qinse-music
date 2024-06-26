import { PlayListCover } from "@/components/playlist/cover";
import {
  LikeButton,
  PlaylistPlayButton,
} from "@/components/playlist/button.client";
import { MoreMenu } from "@/components/playlist/button";
import { getPlaylistInfoById } from "@/actions/playlist";
import { SongTable } from "@/components/playlist/table.client";
import { Badge } from "@/components/ui/badge";

export default async function Page({ params }: { params: { id: string } }) {
  const info = await getPlaylistInfoById(params.id);

  return (
    <div className="flex flex-col  items-center justify-center space-y-12">
      <div
        className="flex h-80 w-full items-center justify-center
        space-x-28 pt-5"
      >
        <PlayListCover size={288} id={params.id} />

        <div className=" flex min-h-full flex-grow flex-col space-y-5 py-10">
          <h1 className="text-5xl">{info.title}</h1>
          <span>
            <Badge>{info.style}</Badge>
          </span>
          {/* <p>By {author}</p> */}
          {/* <p>
            Update at {updateAt} - {amount} songs
          </p> */}
          <p className="line-clamp-3 max-w-xl	 text-ellipsis">
            {info.introduction}
          </p>
          <div className="flex items-center justify-start space-x-2">
            <PlaylistPlayButton id={params.id} />
            <LikeButton />
            {/* <MoreMenu /> */}
          </div>
        </div>
      </div>
      <div className="w-full">
        <SongTable id={params.id} />
      </div>
    </div>
  );
}
