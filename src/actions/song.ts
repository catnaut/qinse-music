import { fetcher } from "@/lib/api";
import { SongSchemaType } from "@/definitions/song";
import { notFound } from "next/navigation";

type Song = SongSchemaType;

export const getSongById = async (id: string): Promise<Song> => {
  const { data, state, ok } = await fetcher<Song>(`/song/select/id?id=${id}`);
  if (!ok) {
    notFound();
  }
  return data;
};
