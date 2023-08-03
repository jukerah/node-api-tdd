import { Request, Response } from "../../../../../infra/http/config"
import { IOutputErrorDTO } from "../../errors/use-cases"
import { IOutputCreateDTO } from "../../use-cases/products"

export interface IRequestCreateDTO extends Request {
  body: {
    name: string
    description: string
    price: number
    amount: number
  }
}

export type IResponseCreateDTO = Response<IOutputCreateDTO | IOutputErrorDTO>