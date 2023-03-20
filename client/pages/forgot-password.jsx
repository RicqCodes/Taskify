import Head from "next/head";
import React from "react";

import { getAuthLayout } from "@/components/common/layouts/auth";
import ForgetPassword from "@/components/pages/forget-password/ForgetPasswordForm";

const register = () => {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <ForgetPassword />
    </>
  );
};

export default register;

register.getLayout = (page) => getAuthLayout(page);
