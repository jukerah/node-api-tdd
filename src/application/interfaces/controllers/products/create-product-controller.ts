import { IRequestCreateDTO, IResponseCreateDTO } from "../../dtos/controllers/products"

export interface ICreateProductController {
  handle(request: IRequestCreateDTO, response: IResponseCreateDTO): Promise<IResponseCreateDTO>
}