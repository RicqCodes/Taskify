import Head from "next/head";
import React from "react";

import { getAuthLayout } from "@/components/common/layouts/auth";
import ResetPasswordForm from "@/components/pages/auth/reset-password/ResetPasswordForm";

const AuthHandler = ({ mode }) => {
  return (
    <>
      <Head>
        <title>
          {mode === "resetPassword"
            ? "Reset Password | Taskify"
            : mode === "verifyEmail"
            ? "Verify Email | Taskify"
            : "Processing page..."}
        </title>
      </Head>
      {mode === "resetPassword" && <ResetPasswordForm />}
    </>
  );
};

export default AuthHandler;

AuthHandler.getLayout = (page) => getAuthLayout(page);

export const getServerSideProps = ({ query }) => {
  const { mode } = query;
  if (!mode) {
    return {
      redirect: "/500",
      permanent: false,
    };
  }

  return {
    props: {
      mode,
    },
  };
};
