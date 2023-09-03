import { TodoState, TodoAction, TODO_ACTIONS } from "types/todo";

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: null,
  limit: 3,
  page: 1
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TODO_ACTIONS.FETCH_TODO:
      return {...state, isLoading: true, error: null, todos: []}
    case TODO_ACTIONS.FETCH_TODO_SUCCESS:
      return {...state, isLoading: false,  todos: action.payload}
    case TODO_ACTIONS.FETCH_TODO_ERROR:
      return {...state, isLoading: false, error: action.payload}
    case TODO_ACTIONS.SET_PAGE:
      return {...state, page: action.payload}
    default:
      return state;
  }
}