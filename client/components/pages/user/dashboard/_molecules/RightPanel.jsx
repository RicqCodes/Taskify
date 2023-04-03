import React from "react";
import styled from "styled-components";

import { color } from "@/styles/utils.styled";
import Chat from "./Chat";
import Activity from "./Activity";

const RightPanel = () => {
  return (
    <RightPanelContainer>
      <Chat />
      <Activity />
    </RightPanelContainer>
  );
};

export default RightPanel;

const RightPanelContainer = styled.div`
  background-color: ${() => color("tertiary", "800")};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;
