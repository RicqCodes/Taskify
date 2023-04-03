import React from "react";
import styled from "styled-components";

import { Divider } from "@/styles/element.styled";
import { MdOutlineViewAgenda } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import Button from "@/components/common/Button";
import { device } from "@/styles/utils.styled";

const DashboardNav = () => {
  return (
    <OverallContainer>
      <NavContainer>
        <Switch>
          <div className="active">
            <MdOutlineViewAgenda />
            <p>Board view</p>
          </div>
          <div>
            <IoMdAddCircle />
            <p>Add view</p>
          </div>
        </Switch>
        <Right>
          <p>Filter</p>
          <div>
            <p>Sort</p>
            <HiOutlineDotsCircleHorizontal />
          </div>
          <Button radius variant="grey" noBack>
            New Template
          </Button>
        </Right>
      </NavContainer>
      <Divider />
    </OverallContainer>
  );
};

export default DashboardNav;

const OverallContainer = styled.nav`
  top: 72px;
  position: sticky;
  background: #fff;
  z-index: 999;
`;

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  ${device.down("sm")} {
    gap: 24px;
    justify-content: center;
  }
`;

const Switch = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: space-between;

  ${device.down("sm")} {
    width: 100%;
  }

  & > div {
    display: flex;
    gap: 8px;
    padding: 16px;
    color: #aaa;

    ${device.down("md")} {
      padding: 0px;
    }
  }
  .active {
    color: #000;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #aaa;

  & > div {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  button {
    ${device.down("md")} {
      padding: 0px 10px;
    }
  }

  ${device.down("sm")} {
    justify-content: flex-end;
    width: 100%;
  }
`;
