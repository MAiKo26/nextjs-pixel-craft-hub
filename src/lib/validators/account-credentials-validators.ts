import {z} from "zod";

export const AuthCredientialsValidator = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, {message: "Password must be at least 8 characters"}),
});

export type TAuthCredientialsValidator = z.infer<
  typeof AuthCredientialsValidator
>;
