import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { RiDashboardLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

import Logo from "@/components/common/Logo";
import { device } from "@/styles/utils.styled";
import { color } from "@/styles/utils.styled";
import { useRouter } from "next/router";

const Sidebar = () => {
  const location = useRouter();

  return (
    <>
      <SidebarElement>
        <div>
          <Logo />
          <Links>
            <LinkContainer
              className={location.pathname === "/user/dashboard" && "active"}
            >
              <div>
                <RiDashboardLine />
              </div>
              <Link href="/user/dashboard">Overview</Link>
            </LinkContainer>
            <LinkContainer
              className={location.pathname === "/user/task" && "active"}
            >
              <div>
                <FaTasks />
              </div>
              <Link href="/user/task">My Task</Link>
            </LinkContainer>
            <LinkContainer
              className={location.pathname === "/user/favorites" && "active"}
            >
              <div>
                <BsFillBookmarkStarFill />
              </div>
              <Link href="/user/favorites">Favorites</Link>
            </LinkContainer>
            <LinkContainer
              className={location.pathname === "/user/settings" && "active"}
            >
              <div>
                <AiFillSetting />
              </div>
              <Link href="/user/settings">Settings</Link>
            </LinkContainer>
          </Links>
          <LinkContainer>
            <div>
              <BiLogOut />
            </div>
            <button
              style={{ background: "transparent", border: "none" }}
              type="button"
            >
              Logout
            </button>
          </LinkContainer>
        </div>
        {/* <div>get premium now</div> */}
      </SidebarElement>
    </>
  );
};

export default Sidebar;

const SidebarElement = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;

  ${() => device.down("md")} {
    display: none;
  }

  & > div {
    min-height: 100vh;
    /* background: ${() => color("primary", 50)}; */
    background: #1111;
    display: flex;
    flex-direction: column;
    position: fixed;
    gap: 48px;
    padding: 32px;
    padding-bottom: 32px;
    width: 240px;
    top: 0;
    bottom: 0;
    overflow: auto;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  padding: 14px 0;

  & > div {
    padding-left: 14px;
    color: #666;
  }

  & > a,
  button {
    color: #666;
    font-size: 16px;
  }

  &.active {
    background: ${() => color("tertiary", "main")};
    border-radius: 8px;

    & > a,
    svg {
      color: ${() => color("tertiary", 900)};
    }
  }
`;
