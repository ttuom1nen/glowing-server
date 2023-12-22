import { NextFunction, Request, Response } from "express";
import { SchemaOf } from "yup";

export const validateBody =
  <T>(schema: SchemaOf<T>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    console.log("validateBody");
    console.log(body);

    try {
      await schema.validate(body);

      return next();
    } catch (err: any) {
      console.log(err);
      return res.status(500).json({ type: err.name, message: err.message });
    }
  };
