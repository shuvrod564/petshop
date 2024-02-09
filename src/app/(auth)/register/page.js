import React from "react";
import Register from "@/components/auth/register";
import AuthLayout from "../authLayout";
import Head from "next/head";

const page = () => {
  return (
      <AuthLayout>
          <Head>
              <title>Registration</title>
          </Head>
          <Register />
      
      </AuthLayout>
  )
}
export default page;