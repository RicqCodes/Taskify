import React from "react";
import styled from "styled-components";

const TitleHeader = ({ title, subTitle, icon, pad }) => {
  return (
    <Title pad={pad}>
      <p>{title}</p>
      <All>
        {subTitle && <small>{subTitle}</small>}
        {icon}
      </All>
    </Title>
  );
};

export default TitleHeader;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${(props) => (props.pad ? "24px" : "0px 0px 24px 0px")};
  justify-content: space-between;

  p {
    font-size: 16px;
  }
`;

const All = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
