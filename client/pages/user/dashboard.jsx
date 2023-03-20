import Head from "next/head";
import React from "react";

import { getAppLayout } from "@/components/common/layouts/private";
import DashboardPage from "@/components/pages/user/dashboard";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Taskify | Dashboard</title>
      </Head>
      <DashboardPage />
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = (page) => getAppLayout(page);
