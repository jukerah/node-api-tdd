import { type IOutputUseCaseErrorDTO } from "@/application/interfaces/dtos/errors/use-cases"

export interface IOutputCreateUserInputDTO {
  fullName: string
  age: number
  username: string
  password: string
  profilePictureUrl: string
}

export type IOutputCreateUserOutputDTO =
  | IOutputUseCaseErrorDTO
  | {
    code: number
    message: string
    result: {
      userId: string
      fullName: string
      age: number
      username: string
      profilePictureUrl: string
    }
  }
