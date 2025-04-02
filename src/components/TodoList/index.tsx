import styled from '@emotion/styled';
import { TodoItem } from 'components/TodoItem';
import { TodoListContext } from 'contexts/TodoList';
import { useContext } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

interface Props {
    readonly todoList: ReadonlyArray<string>;
    readonly onDelete?: (todo: string) => void;
}

export const TodoList = () => {
    const { todoList, onDelete } = useContext(TodoListContext);

    return (
        <Container>
            {todoList.map((todo) => ( //return [TodoItem1, TodoItem2, ...]
                <TodoItem 
                    key={todo}
                    label={todo} 
                    onDelete={() => {
                        if(typeof onDelete === 'function') {
                            onDelete(todo);
                        }
                    }}
                />
            ))}
        </Container>
    );
};