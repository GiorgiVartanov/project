import { userType } from "../../types/authTypes"

import {
  SET_USER,
  SET_TOKEN,
  SET_IS_LOGGED_IN,
  SET_LOADING,
  SET_ERROR,
  SET_REGISTER_ERROR_MESSAGE,
  SET_LOGIN_ERROR_MESSAGE,
} from "../actions/authActions"
import { AuthState } from "../initial/authInitialState"

export type AuthAction =
  | { type: typeof SET_USER; payload: userType | null }
  | { type: typeof SET_TOKEN; payload: string | null }
  | { type: typeof SET_IS_LOGGED_IN; payload: boolean }
  | { type: typeof SET_LOADING; payload: boolean }
  | { type: typeof SET_ERROR; payload: boolean }
  | { type: typeof SET_REGISTER_ERROR_MESSAGE; payload: string }
  | { type: typeof SET_LOGIN_ERROR_MESSAGE; payload: string }

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload }
    case SET_TOKEN:
      return { ...state, token: action.payload }
    case SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload }
    case SET_LOADING:
      return { ...state, isLoading: action.payload }
    case SET_ERROR:
      return { ...state, isError: action.payload }
    case SET_REGISTER_ERROR_MESSAGE:
      return { ...state, registerErrorMessage: action.payload }
    case SET_LOGIN_ERROR_MESSAGE:
      return { ...state, loginErrorMessage: action.payload }
    default:
      return state
  }
}

export default authReducer
