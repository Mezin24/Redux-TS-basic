import axios from 'axios'
import {Dispatch} from 'redux'
import { USER_ACTION_TYPES, User, UserAction } from 'types/user'

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: USER_ACTION_TYPES.FETCH_USERS})
      const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      setTimeout(() => { 
      dispatch({type: USER_ACTION_TYPES.FETCH_USERS_SUCCESS, payload: response.data})
       }, 500)
    } catch (error) {
      dispatch({type: USER_ACTION_TYPES.FETCH_USERS_ERROR, payload: 'Something went wrong'})
    }
  }
}