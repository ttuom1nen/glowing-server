import express, { Request, Response } from "express";
import knex from "../../data/db.js";
import { validateBody } from "../middleware/validateBody.js";
import { usersSchema, usersSchemaPost } from "./users.schema.js";
import { User, UserPost } from "./types.js";

const usersRouter = express.Router();

usersRouter.get(
  "/users",
  async (req: Request, res: Response): Promise<void> => {
    const users: User[] = await knex("users");

    res.status(200).send(users);
  }
);

usersRouter.get(
  "/users/:id",
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const users: User[] = await knex("users").select("*").where("users.id", id);

    if (!users.length) {
      res.status(404);
    }

    res.send(users);
  }
);

usersRouter.patch(
  "/users",
  validateBody<User>(usersSchema),
  async (req: Request, res: Response): Promise<void> => {
    const { id }: User = req.body;

    const updatedUser = await knex("users").where({ id }).update(
      {
        modified_at: knex.fn.now(),
      },
      ["id", "modified_at"]
    );

    if (!updatedUser.length) {
      res.status(404);
    }

    res.send(updatedUser);
  }
);

usersRouter.post(
  "/users",
  validateBody<UserPost>(usersSchemaPost),
  async (req: Request, res: Response): Promise<void> => {
    console.log(req.body);

    const { body } = req;

    const id: number = await knex("users")
      .insert(body)
      .returning("id");

    res.status(200).send(id);
  }
);

usersRouter.delete(
  "/users/:id",
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const removedId: User[] = await knex("users").delete("*").where("users.id", id).returning("id");

    res.status(200).send(removedId);
  }
);

export default usersRouter;
