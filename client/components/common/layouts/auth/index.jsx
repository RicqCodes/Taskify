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

  ${Container} {
    max-width: 960px;
    padding-top: 56px;
  }
`;

export const getAuthLayout = (page) => {
  return <AuthLayout>{page}</AuthLayout>;
};
