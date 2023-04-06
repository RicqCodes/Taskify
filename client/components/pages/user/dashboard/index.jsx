import { theme } from "@/styles/global/theme.styled";
import { device } from "@/styles/utils.styled";
import useAuthProtection from "@/utils/hooks/useAuthProtection";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled from "styled-components";
import LeftPanel from "./_molecules/LeftPanel";
import RightPanel from "./_molecules/RightPanel";

const DashboardPage = () => {
  // const { isAuthenticated } = useAuthProtection();
  const router = useRouter();

  // console.log(isAuthenticated);

  // useEffect(() => {
  //   if (isAuthenticated === false) router.push("/login");
  // }, [isAuthenticated]);

  return (
    <>
      <Main>
        <LeftPanel />
        <RightPanel />
      </Main>
    </>
  );
};

export default DashboardPage;

const Main = styled.div`
  display: grid;
  grid-template-columns: calc(100% - 280px) 280px;
  grid-gap: 18px;
  width: 100%;
  height: calc(100vh - 115px);

  ${() => device.down("md")} {
    grid-template-columns: 100%;
  }
`;
