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
    id: yup.number().required(),
    is_on: yup.boolean().required(),
    value: yup.string().required(),
    description: yup.string(),
    created_at: yup.date(),
    modified_at: yup.date(),
    toggled_by: yup.string()
  });
