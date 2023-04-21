import React from "react";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";

const Modal = ({ ModalContent, OpenState }) => {
  console.log(OpenState);
  return (
    <ModalOuterContainer
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <InnerContent>
          <CloseIcon>
            <MdOutlineClose onClick={() => OpenState?.setIsOpen(false)} />
          </CloseIcon>
          <ModalContent
            isOpen={OpenState?.isOpen}
            setIsOpen={OpenState?.setIsOpen}
          />
        </InnerContent>
      </ModalBox>
    </ModalOuterContainer>
  );
};

export default Modal;

const ModalOuterContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalBox = styled.div`
  display: flex;
  max-width: 640px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  min-height: 340px;
  border-radius: 8px;
  background-color: #fff;
`;

const InnerContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const CloseIcon = styled.div`
  width: 100%;
  display: flex;
  align-items: right;
  justify-content: right;

  svg {
    height: 28px;
    width: 28px;
    cursor: pointer;
  }
`;
