import styled from "styled-components";
import { RiDashboardLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { color, device } from "@/styles/utils.styled";
import Link from "next/link";

const MobileSidebar = () => {
  return (
    <BottomBarElement>
      <ul>
        <li>
          <Link href="/user/dashboard">
            <RiDashboardLine />
          </Link>
        </li>
        <li>
          <Link href="/user/task">
            <FaTasks />
          </Link>
        </li>
        <li>
          <Link href="/user/favorites">
            <BsFillBookmarkStarFill />
          </Link>
        </li>
        <li>
          <Link href="/user/settings">
            <AiFillSetting />
          </Link>
        </li>
      </ul>
    </BottomBarElement>
  );
};

export default MobileSidebar;

const BottomBarElement = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 16px 24px;
  background: ${color("tertiary", "main")};
  z-index: 999;

  ${() => device.up("sm")} {
    display: none;
  }

  > ul {
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: center;
    max-width: 720px;
    width: 100%;
    margin: auto;

    li {
      a {
        svg {
          color: #fff;
          width: 50px;
        }
      }

      .active {
        svg {
          color: ${() => color("primary", "main")};
        }
      }
    }
  }
`;
