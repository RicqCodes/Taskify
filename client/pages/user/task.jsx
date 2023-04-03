import Head from "next/head";
import React from "react";

import { getAppLayout } from "@/components/common/layouts/private";
import TaskPage from "@/components/pages/user/task";

const Task = () => {
  return (
    <>
      <Head>
        <title>Taskify | Task</title>
      </Head>
      <TaskPage />
    </>
  );
};

export default Task;

Task.getLayout = (page) => getAppLayout(page);
