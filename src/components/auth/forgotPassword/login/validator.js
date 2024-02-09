import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    email: Yup.string().required("Please enter your email").email("Email is invalid"),
    password: Yup.string()
    .required("Please enter your password")
    .min(6, "Password must be at least 6 characters"),
  });
  export const formOptions = { resolver: yupResolver(validationSchema) };