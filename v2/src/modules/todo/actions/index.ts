import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./types";

export const addTodo = (content: string) => ({
    type: ADD_TODO,
    content
})
export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    id
})
export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    id
})

export type TodoAction =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof removeTodo>
    | ReturnType<typeof toggleTodo>