import { fetcher } from "@/lib/api";
import { SongSchemaType } from "@/definitions/song";

type Song = SongSchemaType;

export const getSongById = async (id: string): Promise<Song> => {
  const data = await fetcher<Song>(`/song/select/id?id=${id}`);
  return data;
};
