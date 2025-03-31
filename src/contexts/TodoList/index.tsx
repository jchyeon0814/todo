import { createContext, JSX, useState } from 'react';

interface Context {
    readonly todoList: string[];
    readonly onAdd: (todo: string) => void;
    readonly onDelete: (todo: string) => void;
}

const TodoListContext = createContext<Context>({
    todoList: [],
    onAdd: (): void => {},
    onDelete: (): void => {},
});

interface Props {
    children: JSX.Element | JSX.Element[];
}

const TodoListContextProvider = ({ children } : Props) => {
    const [todoList, setTodoList] = useState(['리액트 공부하기', '운동하기', '책 읽기']);

    const onDelete = (todo: string) => {
        setTodoList(todoList.filter((item) => item !== todo));
    };
    
    const onAdd = (todo: string) => {
        setTodoList([...todoList, todo]);
    };
    
    return(
        <TodoListContext.Provider value={{todoList, onAdd, onDelete,}}>
            {children}
        </TodoListContext.Provider>
    );
};


export { TodoListContext, TodoListContextProvider };
