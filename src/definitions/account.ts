import { z } from "zod";

export const EmailLoginSchema = z.object({
  email: z
    .string({
      message: "Please enter a valid email address",
      required_error: "Email is required",
    })
    .email(),
  password: z
    .string({
      message: "Please enter a valid password",
      required_error: "Password is required",
    })
    .min(6),
});

export type EmailLoginSchemaType = z.infer<typeof EmailLoginSchema>;
