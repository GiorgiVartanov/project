export interface loginCredentialsInterface {
  username: string
  password: string
}

export interface registerCredentialsInterface {
  username: string
  password: string
  confirmPassword: string
}

export interface registerCredentialsErrorInterface {
  usernameError: string[] | []
  passwordError: string[] | []
  confirmPasswordError: string[] | []
}

export interface loginCredentialsErrorInterface {
  usernameError: string[] | []
  passwordError: string[] | []
}

export type userType = {
  username: string
  rating: number
  status: "Admin" | "User"
}
