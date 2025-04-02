import { useState } from 'react';
import { DataView } from 'components/DataView';
import { TodoInput } from 'components/TodoInput';
import { ShowInputButton } from 'components/ShowInputButton';


export const InputContainer = () => {
    const [showTodoInput, setShowTodoInput] = useState(false);

    const onClose = () => {
        setShowTodoInput(false);
    };

    return (
        <>
            {showTodoInput && <TodoInput onClose={onClose} />}
            <ShowInputButton show={showTodoInput} onClick={() => setShowTodoInput(!showTodoInput)} />
        </>
    );

}