import React, { useState } from "react";
import Button from "@/components/common/Button";
import { color } from "@/styles/utils.styled";
import styled from "styled-components";

import ProjectCard from "./_molecules/ProjectCard";
import TopBar from "./_molecules/TopBar";
import {
  useGetProjectsQuery,
  useGetUserQuery,
  useGetNotStartedProjectsQuery,
} from "@/redux/api/childApi/userApi";

const ProjectPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: user } = useGetUserQuery();
  const { data: allProjects } = useGetProjectsQuery(user.data.id);
  const { data: notStartedProjects } = useGetNotStartedProjectsQuery(
    user.data.id
  );
  console.log(notStartedProjects);
  return (
    <Container>
      <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <InnerContainer>
        <NotStarted>
          <div>
            <h4>
              Not Started <span>(04)</span>
            </h4>
          </div>
          <div>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </NotStarted>
        <InProgress>
          <div>
            <h4>
              In Progress <span>(04)</span>
            </h4>
          </div>
          <div>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </InProgress>
        <Completed>
          <div>
            <h4>
              Completed <span>(04)</span>
            </h4>
          </div>
          <div>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </Completed>
      </InnerContainer>
    </Container>
  );
};

export default ProjectPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  flex-wrap: wrap;
  top: 0;
  position: sticky;
`;

const NotStarted = styled.div`
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  > div:first-child {
    top: 118px;
    position: sticky;
    z-index: 999;
    height: 36px;
    background: #fff;

    span {
      font-size: 23px;
      color: ${() => color("primary", 200)};
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

const InProgress = styled(NotStarted)``;

const Completed = styled(NotStarted)``;
