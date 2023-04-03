import React from "react";
import styled from "styled-components";
import { IoMdAddCircle } from "react-icons/io";

import TodoCard from "./TodoCard";

const NotStarted = () => {
  return (
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
        <TaskTodoCard />
        <TaskTodoCard />
        <TaskTodoCard />
        <TaskTodoCard />
      </div>
    </Todo>
  );
};

export default NotStarted;

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

const TaskTodoCard = styled(TodoCard)`
  width: 100%;
  max-width: 320px;
  min-width: 320px;
`;
