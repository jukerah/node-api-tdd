import { type IOutputUseCaseErrorDTO } from "@/application/interfaces/errors/use-cases"

export interface ICreateUserUseCase {
  execute: (
    input: IInputCreateUserUseCaseDTO
  ) => Promise<IOutputCreateUserUseCaseDTO | IOutputUseCaseErrorDTO>
}

export interface IInputCreateUserUseCaseDTO {
  fullName: string
  age: number
  username: string
  password: string
  profilePictureUrl: string
}

export type IOutputCreateUserUseCaseDTO = {
  code: number
  message: string
  result: {
    userId: string
    fullName: string
    age: number
    username: string
    password: string
    profilePictureUrl: string
  }
}
