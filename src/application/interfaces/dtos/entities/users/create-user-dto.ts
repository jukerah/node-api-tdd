export interface IInputCreateUserEntityDTO {
  fullName: string
  age: number
  username: string
  password: string
  profilePictureUrl: string
}

export interface IOutputCreateUserEntityDTO {
  userId: string
  fullName: string
  age: number
  username: string
  password: string
  profilePictureUrl: string
}
