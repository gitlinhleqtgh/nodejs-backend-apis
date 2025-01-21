"use strict";

import mongoose from "mongoose";
import { countConnections } from "./check.connections";
import { appConfig } from "../configs/app";

class Database {
  static instance: Database | null = null;
  constructor() {
    this.connect();
  }
  connect() {
    mongoose.set("debug", true);
    mongoose.set("debug", {color: true});
    mongoose
      .connect(appConfig.db.uri, { maxPoolSize: appConfig.db.maxPoolSize })
      .then(() => {
        const numberOfConnections = countConnections();
        console.log(
          `Connected to MongoDB with ${numberOfConnections} connections`
        );
      })
      .catch((error: Error) => {
        console.log("Error connecting to MongoDB", error);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const mongooseConnection = () => Database.getInstance();

export { mongooseConnection };
