export interface User {
  id: number,
  name: string,
  email?: string
}

export interface UserState {
  isLoading: boolean,
  error: null | string,
  users: User[]
}

export enum USER_ACTION_TYPES {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUser {
  type: USER_ACTION_TYPES.FETCH_USERS
}

interface FetchUserSuccess {
  type: USER_ACTION_TYPES.FETCH_USERS_SUCCESS,
  payload: User[]
}

interface FetchUserError {
  type: USER_ACTION_TYPES.FETCH_USERS_ERROR,
  payload: string
}

export type UserAction = FetchUser | FetchUserSuccess | FetchUserError