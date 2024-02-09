import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Please enter your email'),
  });
  export const formOptions = { resolver: yupResolver(validationSchema) };