import { Divider } from "@/styles/element.styled";
import React from "react";
import styled from "styled-components";

import TitleHeader from "./TitleHeader";
import { FiMoreHorizontal } from "react-icons/fi";

const Activity = () => {
  return (
    <ActivityContainer>
      <Divider />
      <div>
        <TitleHeader title="Activity" icon={<FiMoreHorizontal />} />
      </div>
    </ActivityContainer>
  );
};

export default Activity;

const ActivityContainer = styled.div`
  width: 100%;
  padding-top: 24px;

  & > div {
    padding: 24px;
  }
`;
