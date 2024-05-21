import { SongLyricSchemaType } from "@/definitions/song";

type SongLyric = SongLyricSchemaType;

export const parseLyric = (lyric: string): SongLyric => {
  const result = lyric
    .split("\n")
    .map((line) => {
      const match = line.match(/^\[(\d{2}:\d{2}\.\d{3})\](.*)$/);
      if (match) {
        return { time: match[1], text: match[2].trim() };
      }
      return null;
    })
    .filter((line) => line !== null);

  return result
    ? (result as SongLyric)
    : [{ time: "00:00.000", text: "解析错误" }];
};
