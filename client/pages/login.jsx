import Head from "next/head";
import React from "react";

import { getAuthLayout } from "@/components/common/layouts/auth";
import LoginForm from "@/components/pages/login/LoginForm";

const register = () => {
  return (
    <>
      <Head>
        <title>Taskify | Login</title>
      </Head>
      <LoginForm />
    </>
  );
};

export default register;

register.getLayout = (page) => getAuthLayout(page);
