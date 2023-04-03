import React from "react";
import styled from "styled-components";
import Productivity from "./Productivity";
import ProjectSummary from "./ProjectSummary";

const LeftPanel = () => {
  return (
    <>
      <Container>
        <ProjectSummary />
        <Productivity />
      </Container>
    </>
  );
};

export default LeftPanel;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
