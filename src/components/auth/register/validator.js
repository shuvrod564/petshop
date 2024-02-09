
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Please enter your email'),
    password: Yup.string()
      .min(6, "Password should be at least 6 characters ")
      .required("Please enter password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password and confirm password should be match")
      .required("Please enter confirm password"),
  });
  export const formOptions = { resolver: yupResolver(validationSchema) };