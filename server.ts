import { app } from "./src/app";
import * as dotenv from "dotenv";
import { disconnect } from "./src/dbs/check.connections";

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} http://localhost:${process.env.PORT}`);
});

process.on('SIGINT', () => {
  disconnect();
  console.log('Bye bye!');
  process.exit();
});
