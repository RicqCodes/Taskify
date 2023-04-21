import Head from "next/head";
import React from "react";

import { getAuthLayout } from "@/components/common/layouts/auth";
import ForgotPasswordForm from "@/components/pages/auth/forgot-password/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <ForgotPasswordForm />
    </>
  );
};

export default ForgotPassword;

ForgotPassword.getLayout = (page) => getAuthLayout(page);
