import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from '@emotion/styled';
import { DataView } from 'components/DataView';
import { InputContainer } from 'components/InputContainer';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  const [todoList, setTodoList] = useState([
    '리액트 공부하기',
    '운동하기',
    '책 읽기',
  ]);


  const onDelete = (todo: string) => {
    setTodoList(todoList.filter((item) => item !== todo));
  };

  const onAdd = (todo: string) => {
    if (todo === '') return;

    setTodoList([...todoList, todo]);
  }

  return (
    <Container>
      <DataView title="할 일 목록" onDelete={onDelete} todoList={todoList} />
      <InputContainer onAdd={onAdd} />
    </Container>
  );
}

export default App;
