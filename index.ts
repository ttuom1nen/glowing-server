import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
var cors = require('cors')

import featureTogglesRouter from "./src/featureToggles/featureToggles.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express());
app.use(cors())
app.use(featureTogglesRouter);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
