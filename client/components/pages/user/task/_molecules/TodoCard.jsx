import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { BiMessageAltDetail } from "react-icons/bi";

import React from "react";
import styled from "styled-components";
import { color } from "@/styles/utils.styled";

const TodoCard = ({ completed, className }) => {
  return (
    <CardInnerContainer className={className}>
      <div>
        <Title>
          <p>Design new ui presentation</p>
          <small>Dribble marketing</small>
        </Title>
        <div>
          <HiOutlineDotsCircleHorizontal />
        </div>
      </div>
      <Progress>
        <Top>
          <div>
            <p>Progress</p>
          </div>
          <p>{completed ? "10/10" : "7/10"}</p>
        </Top>
        <Bottom completed={completed}></Bottom>
      </Progress>
      <TimeContainer>
        <Date>2 Jan 2022</Date>
        <Info>
          <div>
            <BiMessageAltDetail />
            <small>6</small>
          </div>
          <div>
            <BiMessageAltDetail />
            <small>8</small>
          </div>
        </Info>
      </TimeContainer>
    </CardInnerContainer>
  );
};

export default TodoCard;

const CardInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;
  border-radius: 12px;
  padding: 24px;
  gap: 28px;

  & > div {
    display: flex;
    justify-content: space-between;
    color: #aaa;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    color: #000;
    font-weight: 600;
  }

  small {
    color: #aaa;
  }
`;

const Progress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  & > p {
    color: #000;
    font-size: 16px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }
`;

const Bottom = styled.div`
  width: 100%;
  background: rgba(28, 29, 34, 0.08);
  border-radius: 2px;
  height: 6px;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
    /* width: 70%;
    background-color: ${() => color("secondary", "main")}; */
    width: ${({ completed }) => (completed ? "100%" : "70%")};
    background-color: ${({ completed }) =>
      completed ? color("tertiary", "main") : color("secondary", "main")};
  }
`;

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Date = styled.div`
  padding: 8px 16px;
  border-radius: 18px;
  background-color: ${() => color("primary", 800)};
  color: ${() => color("primary", "main")};
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & > div {
    display: flex;
    align-items: center;
    gap: 3px;
  }
`;
