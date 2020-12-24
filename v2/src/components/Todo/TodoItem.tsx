import React from 'react'
import "./TodoItem.scss"

interface Props {
    id: number
    content: string
    toggle: Function
    isToggled: boolean
}

const Todo = ({ id, content, toggle, isToggled }: Props) => {
    console.log(id, content)
    return (
        <div className="Todo" style={{"background": isToggled ? "green" : "#cacaca"}}>
            <p>{content}</p>
            <button onClick={() => toggle(id)}>Toggle</button>
        </div>
    )
}

export default Todo
