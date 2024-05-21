import { fetcher } from "@/lib/api";

import { SongSchemaType, SongLyricSchemaType } from "@/definitions/song";
import { LyricSchemaType } from "@/definitions/lyric";
import { notFound } from "next/navigation";
import { parseLyric } from "@/lib/lyric";

type Song = SongSchemaType;
type Lyric = LyricSchemaType;
type SongLyric = SongLyricSchemaType;

export const getSongById = async (id: string): Promise<Song> => {
  const { data, state, ok } = await fetcher<Song>(`/song/select/id?id=${id}`);
  if (!ok) {
    notFound();
  }
  return data;
};

export const getSongLyricById = async (id: string): Promise<SongLyric> => {
  const { data, state, ok } = await fetcher<Lyric>(
    `/lyric/songLyric?songId=${id}`,
  );
  if (!ok) {
    return [{ time: "00:00.000", text: "暂无歌词" }];
  }
  const result = parseLyric(data.lyric1);
  return result;
};
