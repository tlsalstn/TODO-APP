import React, { useState } from 'react'
import "./MainContainer.scss"
import useTodo from "../../hooks/useTodo"
import TodoItem from '../../components/Todo/TodoItem'
import { Todo } from '../../modules/todo'

function MainContainer() {
    const { todoState, addTodo, toggleTodo } = useTodo()
    const [content, setContent] = useState<string>("")

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            addTodo(content)
            setContent("")
        }
    }

    return (
        <div className="MainContainer">
            <div className="MainContainer-Input">
                <input type="text" value={content} onChange={e => setContent(e.currentTarget.value)} onKeyUp={e => handleKeyUp(e)} />
                <button onClick={() => addTodo(content)}>Add</button>
            </div>
            <div className="MainContainer-List">
                {todoState.todos.map((todo: Todo, key: number) => {
                    return (
                        <TodoItem id={key} content={todo.content} toggle={toggleTodo} isToggled={todo.complete} key={key} />
                    )
                })}
            </div>
        </div>
    )
}

export default MainContainer