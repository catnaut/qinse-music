import { z } from "zod";

export const SearchSchema = z.object({
  type: z
    .enum(["playlist", "song", "artist", "album", "mixed"])
    .default("mixed"),
  keywords: z.string(),
});

export type SearchSchemaType = z.infer<typeof SearchSchema>;
