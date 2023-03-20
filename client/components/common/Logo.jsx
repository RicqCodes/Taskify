import { color } from "@/styles/utils.styled";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <LogoContainer>
      <Link href="/">
        <h1>Taskify</h1>
      </Link>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  width: 100%;

  h1 {
    font-weight: 800;
    font-family: "Montserrat", sans-serif;
    color: ${() => color("primary", "main")};
    font-size: 28px;
  }
`;
