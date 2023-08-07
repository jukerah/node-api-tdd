import { Request, Response } from "../../../../../infra/http/config"
import { IOutputErrorDTO } from "../../errors/use-cases"
import { IOutputCreateDTO } from "../../use-cases/users"

export interface IRequestCreateDTO extends Request {
  body: {
    fullName: string
    age: number
    username: string
    password: string
    profilePictureUrl: string
  }

}

export type IResponseCreateDTO = Response<IOutputCreateDTO | IOutputErrorDTO>