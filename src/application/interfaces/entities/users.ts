export interface User {
  userId: string
  fullName: string
  age: number
  username: string
  password: string
  profilePictureUrl: string
}

export interface IUserParams {
  fullName: string
  age: number
  username: string
  password: string
  profilePictureUrl: string
}

export type IInputCreateUserEntityDTO = IUserParams

export type IOutputCreateUserEntityDTO = User
