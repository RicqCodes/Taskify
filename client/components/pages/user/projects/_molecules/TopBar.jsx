import React, { useState } from "react";
import styled from "styled-components";

import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import AddProject from "./AddProject";
import CreateProjectSuccess from "./CreateProjectSuccess";

const TopBar = ({ isOpen, setIsOpen }) => {
  return (
    <TopBarContainer>
      <div>
        <LeftPanel></LeftPanel>
        <RightPanel>
          <Button onClick={() => setIsOpen(true)}>Add Project</Button>
        </RightPanel>
      </div>
      {/* {isOpen && (<Modal ModalContent={CreateProjectSuccess} setIsOpen={setIsOpen} />)} */}
      {isOpen && (
        <Modal ModalContent={AddProject} OpenState={{ setIsOpen, isOpen }} />
      )}
    </TopBarContainer>
  );
};

export default TopBar;

const TopBarContainer = styled.div`
  width: 100%;
  top: 72px;
  position: sticky;
  height: 100%;
  background-color: #fff;
  z-index: 999;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const LeftPanel = styled.div``;

const RightPanel = styled.div``;
