import React from "react";
import styled from "styled-components";
import { FiMoreHorizontal } from "react-icons/fi";
import { Divider } from "@/styles/element.styled";
import { color } from "@/styles/utils.styled";
import TitleHeader from "./TitleHeader";

const Overall = () => {
  return (
    <OverallContainer>
      <Container>
        <TitleHeader title="Overall Projects" icon={<FiMoreHorizontal />} pad />
        <Divider />
        <ChatContainer>
          <CircleChat>
            <Completed></Completed>
            <InProgess></InProgess>
            <Todo></Todo>
          </CircleChat>
        </ChatContainer>
        <ColorSchemeContainer>
          <ColorContainer>
            <Top>
              <div>
                <Red></Red>
                <small>Completed</small>
              </div>
              <div>
                <Blue></Blue>
                <small>In Progress</small>
              </div>
            </Top>
            <Bottom>
              <div>
                <Violent></Violent>
                <small>Todo</small>
              </div>
              <div>
                <White></White>
                <small>Total Projects</small>
              </div>
            </Bottom>
          </ColorContainer>
        </ColorSchemeContainer>
      </Container>
    </OverallContainer>
  );
};

export default Overall;

const OverallContainer = styled.div`
  display: flex;
  width: 100%;
  height: 420px;
  background-color: ${() => color("tertiary", "800")};
  border-radius: 12px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ChatContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 28px 0;
`;

const CircleChat = styled.div`
  height: 180px;
  width: 180px;
  border: 18px solid #fff;
  border-radius: 50%;
  position: relative;
  aspect-ratio: 1;
  display: -ms-inline-grid;
  position: relative;
  /* overflow: hidden; */
`;

const Completed = styled.div`
  /* position: absolute;
  inset: 0;
  height: 120px;
  width: 100%;
  border-radius: 50%;
  border: 12px solid blue;
  z-index: 999; */
`;

const InProgess = styled.div``;

const Todo = styled.div``;

const Text = styled.div`
  position: absolute;
  display: flex;
  text-align: center;
  /* align-items: center;
  justify-content: center; */
`;

const ColorSchemeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ColorContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 32px;
`;

const Top = styled.div`
  padding: 0 24px;
  width: 100%;
  display: flex;

  & > div {
    display: flex;
    gap: 6px;
    width: 100%;
    align-items: center;
  }
`;

const Bottom = styled(Top)``;

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

const Violent = styled(Color)`
  background-color: violet;
`;

const White = styled(Color)`
  background-color: white;
`;
