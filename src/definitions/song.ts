import { z } from "zod";
import { IdSchema } from "./id";

export const SongSchema = z.object({
  id: IdSchema,
  singerId: IdSchema,
  name: z.string(),
  introduction: z.string(),
  createTime: z.string().datetime(),
  updateTime: z.string().datetime(),
  pic: z.string().url(),
  url: z.string().url(),
});

export const SongLyricLine = z.object({
  time: z.string().time(),
  text: z.string(),
  translate: z.string().optional(),
});

export const SongLyricSchema = z.array(SongLyricLine);

export type SongSchemaType = z.infer<typeof SongSchema>;
export type SongLyricLineType = z.infer<typeof SongLyricLine>;
export type SongLyricSchemaType = z.infer<typeof SongLyricSchema>;
