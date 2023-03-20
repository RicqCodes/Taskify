import { IoMdAddCircle } from "react-icons/io";

import DashboardNav from "./_molecules/DashboardNav";
import styled from "styled-components";
import TodoCard from "./_molecules/TodoCard";

const DashboardPage = () => {
  return (
    <>
      <DashboardNav />
      <MainContainer>
        <Todo>
          <TodoContainer>
            <Header>
              <p>To do (4)</p>
              <CallToAction>
                <IoMdAddCircle />
                <p>Add new task</p>
              </CallToAction>
            </Header>
          </TodoContainer>
          <div>
            <DashboardTodoCard />
            <DashboardTodoCard />
            <DashboardTodoCard />
            <DashboardTodoCard />
          </div>
        </Todo>
        <Todo>
          <TodoContainer>
            <Header>
              <p>In Progress (4)</p>
              <CallToAction>
                <IoMdAddCircle />
                <p>Add new task</p>
              </CallToAction>
            </Header>
          </TodoContainer>
          <div>
            <DashboardTodoCard />
            <DashboardTodoCard />
            <DashboardTodoCard />
            <DashboardTodoCard />
          </div>
        </Todo>
        <Todo>
          <TodoContainer>
            <Header>
              <p>Completed (4)</p>
              <CallToAction>
                <IoMdAddCircle />
                <p>Add new task</p>
              </CallToAction>
            </Header>
          </TodoContainer>
          <div>
            <DashboardTodoCard completed />
            <DashboardTodoCard completed />
            <DashboardTodoCard completed />
            <DashboardTodoCard completed />
          </div>
        </Todo>
      </MainContainer>
    </>
  );
};

export default DashboardPage;

const MainContainer = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 24px;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Todo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px dashed rgba(28, 29, 34, 0.08);
  border-radius: 12px;
  padding: 18px 12px;

  > div:last-child {
    display: flex;
    gap: 12px;
    width: 100%;
    overflow: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;

  p {
    font-size: 14px;
  }

  & > p {
    color: #aaa;
  }
`;

const CallToAction = styled.div`
  display: flex;
  gap: 8px;
  color: #000;
  align-items: center;
  margin-left: auto;
`;

const DashboardTodoCard = styled(TodoCard)`
  width: 100%;
  max-width: 320px;
  min-width: 320px;
`;
