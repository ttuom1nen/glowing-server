import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import featureTogglesRouter from "./src/featureToggles/featureToggles.routes";
import bodyParser from "body-parser";
var cors = require("cors");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use(featureTogglesRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
