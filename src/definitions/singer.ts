import { z } from "zod";
import { IdSchema } from "./id";

export const SingerSchema = z.object({
  id: IdSchema,
  name: z.string(),
  //  1: 男 2: 女
  sex: z.union([z.literal(1), z.literal(2)]),
  pic: z.string().url(),
  birthday: z.string().date(),
  location: z.string(),
  introduction: z.string(),
});

export type SingerSchemaType = z.infer<typeof SingerSchema>;
