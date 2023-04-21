import Head from "next/head";
import React from "react";

import { getAuthLayout } from "@/components/common/layouts/auth";
import RegisterForm from "@/components/pages/auth/register/RegisterForm";

const Register = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterForm />
    </>
  );
};

export default Register;

Register.getLayout = (page) => getAuthLayout(page);
