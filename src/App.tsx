import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import { DataView } from 'components/DataView';
import { InputContainer } from 'components/InputContainer';
import { TodoListContextProvider } from 'contexts/TodoList'

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
      <TodoListContextProvider>
        <DataView title="할 일 목록" />
        <InputContainer />
      </TodoListContextProvider>
    </Container>
  );
}

export default App;
