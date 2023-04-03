import React from "react";
import styled from "styled-components";

import Chart from "./Chart";
import Overall from "./Overall";
import { device } from "@/styles/utils.styled";

const Productivity = () => {
  return (
    <ProductivityContainer>
      <Title>
        <p>Productivity</p>
      </Title>
      <MainContainer>
        <Overall />
        <Chart />
      </MainContainer>
    </ProductivityContainer>
  );
};

export default Productivity;

const ProductivityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.div`
  p {
    font-size: 16px;
  }
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 280px calc(100% - (280px + 24px));
  gap: 24px;

  ${() => device.down("touch")} {
    grid-template-columns: 100%;
  }
`;
