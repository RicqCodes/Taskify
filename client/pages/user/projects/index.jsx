import Head from "next/head";
import React from "react";

import { getAppLayout } from "@/components/common/layouts/private";
import TaskPage from "@/components/pages/user/task";
import ProjectPage from "@/components/pages/user/projects";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Taskify | Projects</title>
      </Head>
      <ProjectPage />
      {/* <TaskPage /> */}
    </>
  );
};

export default Projects;

Projects.getLayout = (page) => getAppLayout(page);
