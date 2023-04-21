import React from "react";
import styled from "styled-components";
import { IoIosMore } from "react-icons/io";
import { BiTask } from "react-icons/bi";
import { CgCalendarDue } from "react-icons/cg";

import Link from "next/link";

import Tags from "./Tags";
import { color } from "@/styles/utils.styled";

const ProjectCard = () => {
  return (
    <MainContainer href="">
      <ProjectHeader>
        <h5>Project Name</h5>
        <IoIosMore />
      </ProjectHeader>
      <ProjectDescription>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime natus
          aperiam quas
        </p>
      </ProjectDescription>
      <ProjectTags>
        <Tags TagText={"IOS"} />
        <Tags TagText={"ANDRIOD"} />
      </ProjectTags>
      <ProjectStats>
        <TotalTask>
          <BiTask />
          <p>9</p>
        </TotalTask>
        <ExtraDetails>
          <ProjectDueDate>
            <CgCalendarDue />
            <p> 4 Mar 23</p>
          </ProjectDueDate>
        </ExtraDetails>
      </ProjectStats>
    </MainContainer>
  );
};

export default ProjectCard;

const MainContainer = styled(Link)`
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 18px;
  background-color: #1111;
  gap: 18px;
  border-radius: 12px;
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h5 {
    font-weight: 700;
    font-size: 19px;
  }

  svg {
    color: ${() => color("primary", 200)};
  }
`;

const ProjectDescription = styled.div`
  color: ${() => color("primary", 200)};
`;

const ProjectTags = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const ProjectStats = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #aaa;
`;

const TotalTask = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ExtraDetails = styled.div``;

const ProjectDueDate = styled(TotalTask)``;
