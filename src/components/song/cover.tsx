import { getRemotePlaceholder } from "@/lib/blur";
import { getSongById } from "@/actions/song";
import { Cover } from "../main/cover";

export async function SongCover({ id, size }: { id: string; size: number }) {
  const { pic: src } = await getSongById(id);
  const placeholder = await getRemotePlaceholder(src);

  return <Cover src={src} size={size} placeholder={placeholder} />;
}
