import React from "react";
import styled from "styled-components";
import Image from "next/image";

import success from "../../../../../assets/check-mark.png";

const CreateProjectSuccess = () => {
  return (
    <Container>
      <InnerContent>
        <Image src={success} alt="Sucess" width="128" height="128" />
        <h4>Project Succesfully created</h4>
      </InnerContent>
    </Container>
  );
};

export default CreateProjectSuccess;

const Container = styled.div`
  width: 100%;
`;

const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 24px;
`;
