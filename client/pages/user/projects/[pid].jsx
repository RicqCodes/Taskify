import Head from "next/head";
import React from "react";

import { getAppLayout } from "@/components/common/layouts/private";
import TaskPage from "@/components/pages/user/task";
import ProjectPage from "@/components/pages/user/projects";

const Project = () => {
  return (
    <>
      <Head>
        <title>Taskify | Project</title>
      </Head>
      <ProjectPage />
      {/* <TaskPage /> */}
    </>
  );
};

export default Project;

Project.getLayout = (page) => getAppLayout(page);

export const getServerSideProps = ({ query }) => {};
