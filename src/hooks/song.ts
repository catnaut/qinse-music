import { clientFetcher } from "@/lib/api";
import useSWR from "swr";
import { SongSchemaType } from "@/definitions/song";

export function useSong(id: string) {
  const { data, error, isLoading } = useSWR<SongSchemaType>(
    `/song/select/id?id=${id}`,
    clientFetcher,
  );

  return { song: data, error, isLoading };
}
