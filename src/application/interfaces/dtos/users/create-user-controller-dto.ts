import { type IOutputUseCaseErrorDTO } from "@/application/interfaces/errors/use-cases"
import { type IRequestCreateUserControllerDTO } from "@/application/interfaces/controllers"
import { type IOutputCreateUserUseCaseDTO } from "@/application/interfaces/use-cases"

export interface ICreateUserDTO {
  input: (request: IRequestCreateUserControllerDTO) => IOutputCreateUserInputDTO
  output: (input: IOutputCreateUserUseCaseDTO | IOutputUseCaseErrorDTO) => IOutputCreateUserOutputDTO
}

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
