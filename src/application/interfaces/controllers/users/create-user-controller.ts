import { type Request, type Response } from "@/infra/http/config"
import { type IOutputErrorDTO } from "@/application/interfaces/errors/error-dto"
import { type IOutputCreateUserOutputDTO } from "../../dtos"

export interface ICreateUserController {
  handle: (
    request: IRequestCreateUserControllerDTO,
    response: IResponseCreateUserControllerDTO
  ) => Promise<IResponseCreateUserControllerDTO>
}

export interface IRequestCreateUserControllerDTO extends Request {
  body: {
    fullName: string
    age: number
    username: string
    password: string
    profilePictureUrl: string
  }
}

export type IResponseCreateUserControllerDTO =
  Response<IOutputCreateUserOutputDTO | IOutputErrorDTO>
