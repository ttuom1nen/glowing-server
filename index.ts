import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import featureTogglesRouter from "./src/featureToggles/featureToggles.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(featureTogglesRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
