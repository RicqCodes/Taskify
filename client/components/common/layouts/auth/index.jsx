import { Container } from "@/styles/element.styled";
import React from "react";
import styled from "styled-components";
import Header from "./partials/Header";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
    </>
  );
};

export default AuthLayout;

const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 61px);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  padding: 24px 0px;

  ${Container} {
    max-width: 960px;
    padding-top: 56px;
  }
`;

export const getAuthLayout = (page) => {
  return <AuthLayout>{page}</AuthLayout>;
};
