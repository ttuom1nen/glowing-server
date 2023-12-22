import * as yup from "yup";
import { SchemaOf } from "yup";
import { FeatureToggle, Toggle } from "./types";

export const toggleSchema: SchemaOf<Toggle> = yup
  .object()
  .shape({
    id: yup.number().required(),
    is_on: yup.boolean().required()
  }); 


export const featureTogglesSchema: SchemaOf<FeatureToggle> = yup
  .object()
  .shape({
    id: yup.number(),
    label: yup.string().required(),
    description: yup.string().required(),
    is_on: yup.boolean().required(),
    created_at: yup.date(),
    updated_at: yup.date()
  });
