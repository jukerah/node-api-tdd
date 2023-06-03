import { IRequestCreateDTO, IResponseCreateDTO } from "../../dtos/controllers/products/create-product-dto"

export interface ICreateProductController {
  handle(request: IRequestCreateDTO, response: IResponseCreateDTO): Promise<IResponseCreateDTO>
}