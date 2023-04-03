import React from "react";
import styled from "styled-components";
import { BsFolder } from "react-icons/bs";

import { color } from "@/styles/utils.styled";
import { FiMoreHorizontal } from "react-icons/fi";

const Card = () => {
  return (
    <CardContainer>
      <Top>
        <Text>
          <Icon>
            <BsFolder />
          </Icon>
          <p>
            Tasks <br /> Completed
          </p>
        </Text>
        <FiMoreHorizontal />
      </Top>
      <Bottom>
        <Total>
          <p>10</p>
          <small>
            <span>+15% </span>
            from yesterday
          </small>
        </Total>
      </Bottom>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  max-width: 275px;
  width: 100%;
  padding: 18px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: ${() => color("tertiary", "800")};
  border-radius: 12px;
  position: relative;
  z-index: 999;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 90%;
    top: 50%;
    transform: translateY(-50%);
    right: -4px;
    z-index: -1;
    background-color: transparent;
    border-right: 4px solid ${() => color("secondary", 400)};
    border-radius: 8px;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Text = styled.div`
  display: flex;
  gap: 8px;

  p {
    font-size: 16px;
  }
`;

const Icon = styled.div`
  padding: 10px;
  background-color: ${() => color("secondary", 400)};
  color: #fff;
  border-radius: 8px;
`;

const Bottom = styled.div``;

const Total = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  p {
    font-size: 24px;
    font-weight: 700;
  }

  & > small span {
    color: green;
  }
`;
