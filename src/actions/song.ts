import { fetcher } from "@/lib/api";

import { SongSchemaType, SongLyricSchemaType } from "@/definitions/song";
import { LyricSchemaType } from "@/definitions/lyric";
import { notFound } from "next/navigation";
import { parseLyric } from "@/lib/lyric";

type Song = SongSchemaType;
type Lyric = LyricSchemaType;
type SongLyric = SongLyricSchemaType;

export const getSongById = async (id: string): Promise<Song> => {
  try {
    const data = await fetcher<Song>(`/song/select/id?id=${id}`);
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

export const getSongLyricById = async (id: string): Promise<SongLyric> => {
  try {
    const data = await fetcher<Lyric>(`/lyric/songLyric?songId=${id}`);
    const result = parseLyric(data.lyric1);
    return result;
  } catch (error) {
    return [{ time: "00:00.000", text: "暂无歌词" }];
  }
};
