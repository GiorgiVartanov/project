import { createContext, useContext, useReducer } from "react"

import { loginCredentialsInterface, registerCredentialsInterface } from "../../types/authTypes"
import {
  setUser,
  setToken,
  setIsLoggedIn,
  setIsLoading,
  setIsError,
  setRegisterErrorMessage,
  setLoginErrorMessage,
} from "../actions/authActions"
import { login, register } from "../../services/authServices"
import { authReducer } from "../reducers/authReducers"
import { initialState } from "../initial/authInitialState"
import { AuthState, AuthFunctions } from "../initial/authInitialState"

const AuthContext = createContext<(AuthState & AuthFunctions) | undefined>(undefined)

export const useAuthStore = () => useContext(AuthContext)

interface Props {
  children: React.ReactNode
}

const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const registerUser = async (userData: registerCredentialsInterface) => {
    try {
      dispatch(setIsLoading(true))

      const data = await register(userData)
      const { user, token } = data.data

      dispatch(setUser(user))
      dispatch(setToken(token))
      dispatch(setIsLoggedIn(true))

      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("token", JSON.stringify(token))
      localStorage.setItem("isLoggedIn", JSON.stringify(true))

      dispatch(setIsLoading(false))
    } catch (error) {
      dispatch(setIsError(true))

      if (error instanceof Error) {
        dispatch(setRegisterErrorMessage(error.message))
      } else {
        dispatch(setRegisterErrorMessage("unexpected error"))
      }

      dispatch(setIsLoading(false))
    }
  }

  const loginUser = async (userData: loginCredentialsInterface) => {
    try {
      dispatch(setIsLoading(true))

      const data = await login(userData)
      const { user, token } = data.data

      dispatch(setUser(user))
      dispatch(setToken(token))
      dispatch(setIsLoggedIn(true))

      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("token", JSON.stringify(token))
      localStorage.setItem("isLoggedIn", JSON.stringify(true))

      dispatch(setIsLoading(false))
    } catch (error) {
      dispatch(setIsError(true))

      if (error instanceof Error) {
        dispatch(setLoginErrorMessage(error.message))
      } else {
        dispatch(setRegisterErrorMessage("unexpected error"))
      }

      dispatch(setIsLoading(false))
    }
  }

  const logoutUser = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    localStorage.setItem("isLoggedIn", JSON.stringify(false))

    dispatch(setIsLoggedIn(false))
    dispatch(setToken(null))
    dispatch(setUser(null))
  }

  const store = {
    ...state,
    registerUser,
    loginUser,
    logoutUser,
  }

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
}

export default AuthProvider
