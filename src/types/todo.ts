export interface Todo {
  id: number;
  title: string;
}

export interface TodoState {
  todos: Todo[],
  isLoading: boolean,
  error: null | string,
  page: number,
  limit: number
}

export enum TODO_ACTIONS {
  FETCH_TODO = 'FETCH_TODO',
  FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
  FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
  SET_PAGE = 'SET_PAGE',
}

interface FetchTodoAction {
  type: TODO_ACTIONS.FETCH_TODO
}

interface FetchTodoSuccessAction {
  type: TODO_ACTIONS.FETCH_TODO_SUCCESS,
  payload: Todo[]
}

interface FetchTodoErrorAction {
  type: TODO_ACTIONS.FETCH_TODO_ERROR,
  payload: string 
}

interface SetPageAction {
  type: TODO_ACTIONS.SET_PAGE,
  payload: number
}

export type TodoAction = 
  FetchTodoAction |
  FetchTodoSuccessAction |
  FetchTodoErrorAction |
  SetPageAction