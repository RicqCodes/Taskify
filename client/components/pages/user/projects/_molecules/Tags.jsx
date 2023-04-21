import React from "react";
import styled from "styled-components";

import { randomizeColors } from "@/utils/helper";

const Tags = ({ TagText }) => {
  const color = randomizeColors();

  return (
    <TagContainer background={color.light} color={color.dark}>
      {TagText}
    </TagContainer>
  );
};

export default Tags;

const TagContainer = styled.div`
  padding: 12px;
  height: 28px;
  border-radius: 4px;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;
