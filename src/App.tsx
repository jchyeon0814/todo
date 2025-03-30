import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from '@emotion/styled';
import { DataView } from 'components/DataView';
import { TodoInput } from 'components/TodoInput';
import { Button } from 'components/Button'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const ShowInputButton = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
`;


function App() {
  const [todoList, setTodoList] = useState([
    '리액트 공부하기',
    '운동하기',
    '책 읽기',
  ]);

  const [showTodoInput, setShowTodoInput] = useState(false);

  const onDelete = (todo: string) => {
    setTodoList(todoList.filter((item) => item !== todo));
  };

  const onAdd = (todo: string) => {
    if (todo === '') return;

    setTodoList([...todoList, todo]);
    setShowTodoInput(false);
  }

  return (
    <Container>
      <DataView title="할 일 목록" onDelete={onDelete} todoList={todoList} />
      {showTodoInput && <TodoInput onAdd={onAdd} />}
      <ShowInputButton>
        <Button 
          label={showTodoInput ? '닫기' : '할 일 추가'}
          color={showTodoInput ? undefined : '#304FFE'} 
          onClick={() => setShowTodoInput(!showTodoInput)}
        />
      </ShowInputButton>
    </Container>
  );
}

export default App;
