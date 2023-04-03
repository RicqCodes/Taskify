import React from "react";
import styled from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "./Card";
import TitleHeader from "./TitleHeader";

const ProjectSummary = () => {
  return (
    <SummaryContainer>
      <TitleHeader
        title="Project Summary"
        subTitle="See All Projects"
        icon={<MdOutlineKeyboardArrowRight />}
      />
      <CardContainer>
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </SummaryContainer>
  );
};

export default ProjectSummary;

const SummaryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 18px;
  width: 100%;
  flex-wrap: wrap;
`;
