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

export type SongSchemaType = z.infer<typeof SongSchema>;
