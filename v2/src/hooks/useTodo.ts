import { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../modules"
import { add, toggle } from "../modules/todo"

function useTodo() {
    const todoState = useSelector((state: RootState) => state.todo)
    const dispatch = useDispatch()

    const addTodo = useCallback((content: string) => dispatch(add(content)), [dispatch])
    const toggleTodo = useCallback((id: number) => dispatch(toggle(id)), [dispatch])

    return { todoState, addTodo, toggleTodo }
}

export default useTodo