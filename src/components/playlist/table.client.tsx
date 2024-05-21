import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { getPlaylistSongsById } from "@/actions/playlist";
import { SongSchemaType } from "@/definitions/song";

export async function SongTable({ id }: { id: string }) {
  const songs = await getPlaylistSongsById(id);
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead>歌名</TableHead>
          <TableHead>歌手</TableHead>
          {/* <TableHead>专辑</TableHead>
          <TableHead>时长</TableHead> */}
          <TableHead>操作 </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {songs.map((song: SongSchemaType) => (
          <TableRow key={song.id}>
            <TableCell className="font-medium">{song.name}</TableCell>
            <TableCell>{song.singerId}</TableCell>
            {/* <TableCell>{song.albumId}</TableCell>
            <TableCell>{song.duration}</TableCell> */}
            <TableCell>
              <Button variant={"ghost"} size={"icon"} className="text-3xl">
                <span className="icon-[material-symbols--play-arrow]" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
