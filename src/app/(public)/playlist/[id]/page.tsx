import { PlayListCover } from "@/components/playlist/cover";
import { LikeButton, PlayButton } from "@/components/playlist/button.client";
import { MoreMenu } from "@/components/playlist/button";
import { getPlaylistInfoById } from "@/actions/playlist";

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
          <p>{info.style}</p>
          {/* <p>By {author}</p> */}
          {/* <p>
            Update at {updateAt} - {amount} songs
          </p> */}
          <p className="line-clamp-3 max-w-xl	 text-ellipsis">
            {info.introduction}
          </p>
          <div className="flex items-center justify-start space-x-2">
            <PlayButton />
            <LikeButton />
            <MoreMenu />
          </div>
        </div>
      </div>
      {/* TODO: 歌曲表格 */}
    </div>
  );
}
