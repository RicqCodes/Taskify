import React from "react";
import styled from "styled-components";

const AuthContainer = ({ children }) => {
  return <AuthConElement>{children}</AuthConElement>;
};

export default AuthContainer;

const AuthConElement = styled.div`
  > form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 450px;
    margin: auto;
  }
`;
