import { z } from "zod";

// 大于0的整数
export const IdSchema = z.number().int().positive();

export type IdSchemaType = z.infer<typeof IdSchema>;
