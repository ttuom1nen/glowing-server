import express, { Request, Response } from "express";
import knex from "../../data/db.js";
import { validateBody } from "../middleware/validateBody.js";
import { featureTogglesSchema, toggleSchema } from "./featureToggles.schema.js";
import { FeatureToggle, Toggle } from "./types.js";

const featureTogglesRouter = express.Router();

featureTogglesRouter.get(
  "/toggles",
  async (req: Request, res: Response): Promise<void> => {
    const featureToggles: FeatureToggle[] = await knex("feature_toggle");

    res.status(200).send(featureToggles);
  }
);

featureTogglesRouter.get(
  "/toggles/:id",
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const toggles: FeatureToggle[] = await knex("feature_toggle").select("*").where("feature_toggle.id", id);

    if (!toggles.length) {
      res.status(404);
    }

    res.send(toggles);
  }
);

featureTogglesRouter.patch(
  "/toggles",
  validateBody<Toggle>(toggleSchema),
  async (req: Request, res: Response): Promise<void> => {
    const { id, is_on }: Toggle = req.body;

    const updatedTodo = await knex("feature_toggle").where({ id }).update(
      {
        is_on,
        updated_at: knex.fn.now(),
      },
      ["id", "is_on", "updated_at"]
    );

    if (!updatedTodo.length) {
      res.status(404);
    }

    res.send(updatedTodo);
  }
);

featureTogglesRouter.post(
  "/toggles",
  validateBody<FeatureToggle>(featureTogglesSchema),
  async (req: Request, res: Response): Promise<void> => {
    console.log(req.body);

    const { body } = req;

    const newToggle = {
      ...body,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    };

    const id: number = await knex("feature_toggle")
      .insert(newToggle)
      .returning("id");

    res.status(200).send(id);
  }
);

featureTogglesRouter.delete(
  "/toggles/:id",
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const removedId: FeatureToggle[] = await knex("feature_toggle").delete("*").where("feature_toggle.id", id).returning("id");

    res.status(200).send(removedId);
  }
);

export default featureTogglesRouter;
