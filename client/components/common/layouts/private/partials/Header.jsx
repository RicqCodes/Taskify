import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
// import { IoNotificationsOutline } from "react-icons/io";
import { GrNotification } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";

import InputField from "@/components/common/InputField";
import { device } from "@/styles/utils.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Intro>
        <p>Hello Ronaldo 👋</p>
        <small>Let's pick up where we left!</small>
      </Intro>
      <Right>
        <InputField endAdornment={<FiSearch />} />
        <div>
          <FiSearch />
        </div>
        <div>
          <GrNotification />
        </div>
        <div>
          <AiOutlineCalendar />
          <div>
            <small>March 31 2023</small>
          </div>
        </div>
        <div>
          <Profile></Profile>
        </div>
      </Right>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  top: 0;
  position: static;
  height: 72px;
  align-items: center;
  justify-content: space-between;
  color: #000;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p:first-child {
    font-weight: 700;
  }

  small {
    color: #aaa;
    display: block;
  }
`;

const Right = styled.div`
  display: flex;
  gap: 28px;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;

    small {
      white-space: nowrap;
    }
  }

  & > div:nth-child(2) {
    display: none;
  }

  ${device.down("md")} {
    gap: 12px;
    & > div:nth-child(4),
    & > div:nth-child(1) {
      display: none;
    }

    & > div:nth-child(2) {
      display: flex;
    }
  }
`;

const Profile = styled.div`
  height: 36px;
  width: 36px;

  border-radius: 50%;
  background-color: #000;
`;
