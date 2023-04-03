import React from "react";
import styled from "styled-components";
import { FiMoreHorizontal } from "react-icons/fi";
import { color, device } from "@/styles/utils.styled";
import { Divider } from "@/styles/element.styled";

const Chart = () => {
  return (
    <ChartContainer>
      <Container>
        <Title>
          <p>Task Activity</p>
          <div>
            <div>
              <Red></Red>
              <small>Completed</small>
            </div>
            <div>
              <Blue></Blue>
              <small>In Progress</small>
            </div>
            <div>
              <FiMoreHorizontal />
            </div>
          </div>
        </Title>
        <Divider />
      </Container>
    </ChartContainer>
  );
};

export default Chart;

const ChartContainer = styled.div`
  width: 100%;
  height: 420px;
  background-color: ${() => color("tertiary", "800")};
  border-radius: 12px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* padding: 24px; */
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 24px;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 16px;

    & > div {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }

  ${() => device.down("md")} {
    & > div {
      flex-direction: column;
      align-items: flex-end;
      gap: 6px;
    }
  }
`;

const Color = styled.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
`;

const Red = styled(Color)`
  background-color: red;
`;

const Blue = styled(Color)`
  background-color: blue;
`;
