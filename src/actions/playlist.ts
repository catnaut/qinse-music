import { fetcher } from "@/lib/api";
import { notFound } from "next/navigation";
import { SongSchemaType } from "@/definitions/song";
import {
  PlayListSongsSchemaType,
  PlaylistInfoSchemaType,
} from "@/definitions/playlist";

type Song = SongSchemaType;
type PlaylistInfo = PlaylistInfoSchemaType;
type PlaylistSongs = PlayListSongsSchemaType;

export const getPlaylistInfoById = async (
  id: string,
): Promise<PlaylistInfo> => {
  const { data, state, ok } = await fetcher<PlaylistInfo>(
    `/songList/selectByPrimaryKey?id=${id}`,
  );

  if (!ok) {
    notFound();
  }

  const picUrl = data.pic.startsWith("/")
    ? `${process.env.IMAGE_URL}${data.pic}`
    : data.pic;

  const result = {
    ...data,
    pic: picUrl,
  };
  return result;
};

export const getPlaylistSongsById = async (
  id: string,
): Promise<PlaylistSongs> => {
  const { data, state, ok } = await fetcher<PlaylistSongs>(
    `/listSong/select/songListId?songListId=${id}`,
  );
  if (!ok) {
    notFound();
  }
  return data;
};
