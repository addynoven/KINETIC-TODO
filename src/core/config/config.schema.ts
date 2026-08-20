import { z } from "zod";

export const ConfigSchema = z.object({
  env: z.enum(["development", "production", "test"]).default("development"),
});

export type AppConfig = z.infer<typeof ConfigSchema>;
