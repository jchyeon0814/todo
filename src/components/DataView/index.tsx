import styled from '@emotion/styled';
import { Title } from 'components/Title';
import { TodoList } from 'components/TodoList';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    background-color: #ffffff;
    padding: 32px;
    border-radius: 8px;
`;

interface Props {
    readonly title: string;
    readonly todoList: ReadonlyArray<string>;
    readonly onDelete?: (todo: string) => void;
}

export const DataView = ({ title, todoList, onDelete }: Props) => {
    return (
        <Container>
            <Title label={title} />
            <TodoList todoList={todoList} onDelete={onDelete} />
        </Container>
    );
}