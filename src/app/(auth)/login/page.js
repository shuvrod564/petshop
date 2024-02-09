import React from "react";
import AuthLayout from "../authLayout";
import Head from "next/head";
import Login from "@/components/auth/forgotPassword/login";

const page = () => {
  return (
      <AuthLayout>
          <Head>
              <title>Login</title>
          </Head>
          <Login />
      
      </AuthLayout>
  )
}
export default page;