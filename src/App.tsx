import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from '@emotion/styled';
import { DataView } from 'components/DataView';
import { TextInput } from 'components/TextInput';


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

  const [todo, setTodo] = useState('');

  const onDelete = (todo: string) => {
    setTodoList(todoList.filter((item) => item !== todo));
  };

  return (
    <Container>
      <DataView title="할 일 목록" onDelete={onDelete} todoList={todoList} />
      <TextInput
        value={todo}
        onChange={setTodo}
      />
    </Container>
  );
}

export default App;
