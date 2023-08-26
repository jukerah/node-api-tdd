import { type Request, type Response } from "@/infra/http/config"
import { type IOutputUseCaseErrorDTO } from "@/application/interfaces/dtos/errors/use-cases"

export interface IRequestCreateUserControllerDTO extends Request {
  body: {
    fullName: string
    age: number
    username: string
    password: string
    profilePictureUrl: string
  }
}

export type IOutputCreateUserControllerDTO =
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

export type IResponseCreateUserControllerDTO =
  Response<IOutputCreateUserControllerDTO>

export interface ICreateUserController {
  handle: (
    request: IRequestCreateUserControllerDTO,
    response: IResponseCreateUserControllerDTO
  ) => Promise<IResponseCreateUserControllerDTO>
}
