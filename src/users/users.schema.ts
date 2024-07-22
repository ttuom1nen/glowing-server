import * as yup from "yup";
import { SchemaOf } from "yup";
import type { User, UserPost } from "./types";


export const usersSchemaPost: SchemaOf<UserPost> = yup
  .object()
  .shape({
    username: yup.string().required(),
    email: yup.string().email().required().max(100, "Email is too long!"),
    password_hash: yup.string().required(),
    first_name: yup.string().max(100, "First name is too long!").required(),
    last_name: yup.string().max(100, "Last name is too long!").required(),
    profile_picture: yup.string().max(255, "Profile picture url is too long!")
  });

export const usersSchema: SchemaOf<User> = usersSchemaPost.shape({
  id: yup.string().uuid("Id is not a valid uuid!").required(),
  created_at: yup.string().required(),
  modified_at: yup.string().required(),
  modified_by: yup.string().required(),
  status: yup.string().required()
})