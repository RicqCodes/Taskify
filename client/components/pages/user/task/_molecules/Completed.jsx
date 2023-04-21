import Card from "@/components/common/Card";
import React from "react";
import styled from "styled-components";

import TodoCard from "./TodoCard";

const Completed = () => {
  return (
    <Todo>
      <TodoContainer>
        <Header>
          <p>Completed (4)</p>
        </Header>
      </TodoContainer>
      <div>
        <Card CardType={<TaskTodoCard completed />} />
        <Card CardType={<TaskTodoCard completed />} />
        <Card CardType={<TaskTodoCard completed />} />
        <Card CardType={<TaskTodoCard completed />} />
      </div>
    </Todo>
  );
};

export default Completed;

const Todo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px dashed rgba(28, 29, 34, 0.08);
  border-radius: 12px;
  padding: 18px 12px;
  gap: 12px;

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
