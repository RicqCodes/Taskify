import { color } from "@/styles/utils.styled";
import styled from "styled-components";

const AuthTitle = ({ title, subText }) => {
  return (
    <>
      <Heading>
        {title && <h1>{title}</h1>}
        {subText && <span>{subText}</span>}
      </Heading>
    </>
  );
};

export default AuthTitle;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #4f4f4f;
`;
