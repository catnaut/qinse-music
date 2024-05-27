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
  try {
    const data = await fetcher<PlaylistInfo>(
      `/songList/selectByPrimaryKey?id=${id}`,
    );

    // 为了兼容后端返回的图片地址
    // 如果图片地址以 / 开头，可以认为是图片在后端服务器上
    const picUrl = data.pic.startsWith("/")
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${data.pic}`
      : data.pic;

    const result = {
      ...data,
      pic: picUrl,
    };
    return result;
  } catch (error) {
    notFound();
  }
};

export const getPlaylistSongsById = async (
  id: string,
): Promise<PlaylistSongs> => {
  try {
    const data = await fetcher<PlaylistSongs>(
      `/listSong/select/songListId?songListId=${id}`,
    );

    return data;
  } catch (error) {
    notFound();
  }
};
