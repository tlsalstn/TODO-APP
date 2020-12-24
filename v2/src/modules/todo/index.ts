import { TodoAction, addTodo, removeTodo, toggleTodo } from "./actions"
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions/types"

export const add = (content: string) => (dispatch: Function) => {
    dispatch(addTodo(content))
}
export const remove = (id: number) => (dispatch: Function) => {
    dispatch(removeTodo(id))
}
export const toggle = (id: number) => (dispatch: Function) => {
    dispatch(toggleTodo(id))
}

export type Todo = {
    content: string
    complete: boolean
}

type TodoState = {
    todos: Todo[]
}

const initialState: TodoState = {
    todos: []
}

function todo(state: TodoState = initialState, action: TodoAction) {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        content: action.content,
                        complete: false
                    }
                ]
            }
        case TOGGLE_TODO:
            console.log(state.todos.map((todo, key) => action.id === key ? { ...todo, complete: !todo.complete } : todo))
            return {
                ...state,
                todos: state.todos.map((todo, key) => action.id === key ? { ...todo, complete: !todo.complete } : todo)
            }
        default:
            return state
    }
}

export default todo