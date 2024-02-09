
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password should be at least 6 characters ")
      .required("Password is required"),
      cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password and confirm password should be match")
      .required("Confirm Password is required"),
  });
  export const formOptions = { resolver: yupResolver(validationSchema) };