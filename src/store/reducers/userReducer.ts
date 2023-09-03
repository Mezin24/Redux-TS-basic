import { USER_ACTION_TYPES, UserAction, UserState } from "types/user"

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case USER_ACTION_TYPES.FETCH_USERS:
      return {...state,  isLoading: true, error: null, users: []}
    case USER_ACTION_TYPES.FETCH_USERS_SUCCESS:
      return {...state,  isLoading: false, users: action.payload}
    case USER_ACTION_TYPES.FETCH_USERS_ERROR:
      return {...state,  isLoading: false, error: action.payload}
  
    default:
      return state;
  }
}