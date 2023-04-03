import Head from "next/head";
import React from "react";

import { getAuthLayout } from "@/components/common/layouts/auth";
import RegisterForm from "@/components/pages/auth/register/RegisterForm";

const register = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterForm />
    </>
  );
};

export default register;

register.getLayout = (page) => getAuthLayout(page);
