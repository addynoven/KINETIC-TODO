import { ConfigSchema, type AppConfig } from "./config.schema";

export const config: Readonly<AppConfig> = Object.freeze(
  ConfigSchema.parse({
    env: process.env.NODE_ENV || "development",
  }),
);
