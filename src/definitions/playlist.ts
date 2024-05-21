import { z } from "zod";
import { IdSchema } from "./id";
import { SongSchema } from "./song";

export const PlayListSongsSchema = z.array(SongSchema);

export const PlayListSchema = z.object({
  id: IdSchema,
  title: z.string(),
  introduction: z.string(),
  pic: z.string().url(),
  style: z.string(),
  list: PlayListSongsSchema,
});

export const PlaylistInfoSchmea = PlayListSchema.omit({ list: true });

export type PlaylistSchemaType = z.infer<typeof PlayListSchema>;
export type PlaylistInfoSchemaType = z.infer<typeof PlaylistInfoSchmea>;
export type PlayListSongsSchemaType = z.infer<typeof PlayListSongsSchema>;
