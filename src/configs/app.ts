import * as dotenv from "dotenv";
import { env } from "process";

dotenv.config();

const appConfig = {
  app: {
    env: env.ENV || "development",
    port: process.env.PORT || 3000,
  },
  db: {
    uri: process.env.MONGO_URI || "",
    maxPoolSize: 5,
  },
};

export { appConfig };
