import { Request, Response } from "../../../../../infra/http-config"

interface IRequestCreateDTO extends Request {
  body: {
    name: string
    description: string
    price: number
    amount: number
  }
}

type IResponseCreateDTO = Response<string | { message: string }>

export { IRequestCreateDTO, IResponseCreateDTO }