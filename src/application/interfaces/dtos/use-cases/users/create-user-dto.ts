export interface IInputCreateDTO {
  fullName: string
  age: number
  username: string
  password: string
	profilePictureUrl: string
}

export interface IOutputCreateDTO {
  code: number
  result: {
    userId: string
    fullName: string
    age: number
    username: string
    password: string
    profilePictureUrl: string
  }
  message: string
}