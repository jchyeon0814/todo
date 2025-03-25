import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import { Title } from 'components/Title';
import { TodoList } from 'components/TodoList';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  return (
    <Container>
      <Title label="할 일 목록" />
      <TodoList todoList={["리액트 공부하기", "운동하기", "책 읽기"]}/>
    </Container>
  );
}

export default App;
