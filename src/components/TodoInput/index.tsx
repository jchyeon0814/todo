import { useState, useContext } from 'react';
import styled from '@emotion/styled';
import { TextInput } from 'components/TextInput';
import { Button } from 'components/Button';
import { Title } from 'components/Title';
import { TodoListContext } from 'contexts/TodoList';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 75%);
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
    readonly onClose: () => void;
}

export const TodoInput = ({ onClose }: Props) => {
    const { onAdd } = useContext(TodoListContext);
    const [todo, setTodo] = useState('');

    const onAddTodo = () => {
        if (todo === '') return;

        onAdd(todo);
        setTodo('');
        onClose();
    }

    return (
        <Container>
            <Background />
            <Contents>
                <Title label="할 일 추가" />
                <InputContainer>
                <TextInput value={todo} onChange={setTodo} />
                <Button label="추가" color="#304FFE" onClick={onAddTodo} />
                </InputContainer>
            </Contents>
        </Container>
    );
}