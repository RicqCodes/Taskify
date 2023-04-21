import React from "react";
import styled from "styled-components";

import { Container } from "@/styles/element.styled";
import { device } from "@/styles/utils.styled";
import Header from "./partials/Header";
import Sidebar from "./partials/Sidebar";
import MobileSidebar from "./partials/MobileSidebar";

const AppLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainSection>
        <Header />
        <main>{children}</main>
      </MainSection>
      <MobileSidebar />
    </LayoutContainer>
  );
};

export default AppLayout;

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 240px calc(100% - 240px);
  position: relative;

  ${() => device.down("md")} {
    grid-template-columns: 100%;
  }
`;

const MainSection = styled(Container)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;

  > main {
    padding-top: 24px;
    width: 100%;
  }
`;

export const getAppLayout = (page) => {
  return <AppLayout>{page}</AppLayout>;
};
