import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";

import InputField from "@/components/common/InputField";
import { device } from "@/styles/utils.styled";
import { useGetUserQuery } from "@/redux/api/childApi/userApi";
import Image from "next/image";

const Header = () => {
  const { data, isLoading } = useGetUserQuery();
  console.log(data);

  const date = new Date().toDateString("MM DD YYYY");
  const dp = data.data?.userData.profile_picture;

  return (
    <HeaderContainer>
      <Intro>
        <p>Hello {data.data?.name?.split(" ")[0]} 👋</p>
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
            <small>{date}</small>
          </div>
        </div>
        <div>
          <Profile>
            <Image src={dp} width="36" height="36" />
          </Profile>
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
  position: sticky;
  height: 72px;
  z-index: 999;
  align-items: center;
  justify-content: space-between;
  color: #000;
  background: #fff;
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
  background-color: transparent;
`;
