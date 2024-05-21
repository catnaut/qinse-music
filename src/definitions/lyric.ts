import { z } from "zod";

export const LyricSchema = z.object({
  lyric1: z.string(),
  lyric2: z.string().optional(),
});

export type LyricSchemaType = z.infer<typeof LyricSchema>;
