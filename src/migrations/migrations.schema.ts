import * as yup from "yup";
import { SchemaOf } from "yup";
import type { Migration } from "./types";

export const migrationsSchema: SchemaOf<Migration> = yup
  .object()
  .shape({
    id: yup.number().required(),
    name: yup.string().required(),
    batch: yup.number().required(),
    migration_time: yup.date().required()
  });
