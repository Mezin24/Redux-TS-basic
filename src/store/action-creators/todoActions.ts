import axios from 'axios'
import {Dispatch} from 'redux'
import { TODO_ACTIONS, Todo, TodoAction } from 'types/todo'

export const fetchTodo = (page = 1, limit = 3) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({type: TODO_ACTIONS.FETCH_TODO})
      const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
        params: {
          _page: page, 
          _limit: limit
        }
      })
      setTimeout(() => { 
        dispatch({type: TODO_ACTIONS.FETCH_TODO_SUCCESS, payload: response.data})
      }, 500)
    } catch (error) {
      dispatch({type: TODO_ACTIONS.FETCH_TODO_ERROR, payload: 'Some problems with todos fetching...'})
    }
  }
}

export const setPage = (page: number) => ({type: TODO_ACTIONS.SET_PAGE, payload: page})