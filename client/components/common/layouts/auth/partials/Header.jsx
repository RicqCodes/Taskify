import React from "react";
import styled from "styled-components";

import Logo from "@/components/common/Logo";
import { Container } from "@/styles/element.styled";
import Button from "@/components/common/Button";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo />
        <Button>Login</Button>
      </Container>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
