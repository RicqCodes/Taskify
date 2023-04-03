import React from "react";
import styled from "styled-components";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";

import TitleHeader from "./TitleHeader";

const Chat = () => {
  return (
    <ChatContainer>
      <TitleHeader
        title="Chat"
        subTitle="See all"
        icon={<MdOutlineKeyboardArrowRight />}
        pad
      />
      <ProfileContainer>
        <div>
          <div>
            <Img></Img>
            <small>Louis</small>
          </div>
          <div>
            <Img></Img>
            <small>Funke</small>
          </div>
          <div>
            <Img></Img>
            <small>Esther</small>
          </div>
          <div>
            <Img></Img>
            <small>Jacob</small>
          </div>
        </div>
        <div>
          <IoIosArrowDropright />
        </div>
      </ProfileContainer>
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProfileContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 0px 24px;
  align-items: center;
  justify-content: space-between;

  & > div:first-child {
    display: flex;
    gap: 12px;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
`;

const Img = styled.div`
  height: 32px;
  width: 32px;
  background-color: #000;
  border-radius: 50%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    height: 8px;
    width: 8px;
    background-color: green;
    border-radius: 50%;
    bottom: 0;
    right: 0;
    z-index: 999;
  }
`;
