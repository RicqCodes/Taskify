import Head from "next/head";
import React from "react";

import { getAuthLayout } from "@/components/common/layouts/auth";
import LoginForm from "@/components/pages/auth/login/LoginForm";

const Login = () => {
  return (
    <>
      <Head>
        <title>Taskify | Login</title>
      </Head>
      <LoginForm />
    </>
  );
};

export default Login;

Login.getLayout = (page) => getAuthLayout(page);

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
