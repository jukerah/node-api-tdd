import { IRequestCreateDTO, IResponseCreateDTO } from "../../dtos/controllers/users"

export interface ICreateUserController {
  handle(request: IRequestCreateDTO, response: IResponseCreateDTO): Promise<IResponseCreateDTO>
}