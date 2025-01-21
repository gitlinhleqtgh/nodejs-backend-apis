import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import compresstion from "compression";
import { mongooseConnection } from "./dbs/init.mongo";
import { checkOverload } from "./dbs/check.connections";
import { appConfig } from "./configs/app";

const app: Express = express();
dotenv.config();

app.use(morgan("dev"));
app.use(helmet()); 
app.use(compresstion());
mongooseConnection();

console.log(`Server is running on ${appConfig.app.env}`);
switch (appConfig.app.env) {
  case "production":
    checkOverload();
    break;
  case "development":
    break;
  default:
    console.log("No ENV set");
}

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World!" });
});

export { app };
