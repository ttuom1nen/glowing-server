import express, { Request, Response } from "express";
import knex from "../../data/db.js";
import { validateBody } from "../middleware/validateBody.js";
import { migrationsSchema } from "./migrations.schema.js";
import type { Migration } from "./types.js";

const migrationsRouter = express.Router();

migrationsRouter.get(
    "/migrations",
    async (req: Request, res: Response): Promise<void> => {
        const migrations: Migration[] = await knex("knex_migrations");

        res.status(200).send(migrations);
    }
);

export default migrationsRouter