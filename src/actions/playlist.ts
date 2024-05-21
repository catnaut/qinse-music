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
  console.log(data, state, ok);

  if (!ok) {
    notFound();
  }
  return data;
};

export const getPlaylistSongsById = async (
  id: string,
): Promise<PlaylistSongs> => {
  const { data, state, ok } = await fetcher<PlaylistSongs>(
    `/listSong/select/id?id=${id}`,
  );
  if (!ok) {
    notFound();
  }
  return data;
};
