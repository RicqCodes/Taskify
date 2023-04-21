import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { BiMessageAltDetail } from "react-icons/bi";

import React from "react";
import styled from "styled-components";
import { color } from "@/styles/utils.styled";

const Card = ({ CardType, className }) => {
  return <CardContainer className={className}>{CardType}</CardContainer>;
};

export default Card;

const CardContainer = styled.div`
  width: 100%;
  border: 2px solid rgba(28, 29, 34, 0.06);
  border-radius: 12px;
`;
