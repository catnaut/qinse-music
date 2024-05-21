import { getRemotePlaceholder } from "@/lib/blur";
import { getPlaylistInfoById } from "@/actions/playlist";
import { Cover } from "../main/cover";

export async function PlayListCover({
  id,
  size,
}: {
  id: string;
  size: number;
}) {
  const { pic: src } = await getPlaylistInfoById(id);
  const placeholder = await getRemotePlaceholder(src);

  return <Cover src={src} size={size} placeholder={placeholder} />;
}
