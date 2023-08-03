import { IInputCreateDTO, IOutputCreateDTO } from "../dtos/repositories/products"

export interface IProductsRepository {
  create(inputDTO: IInputCreateDTO): Promise<IOutputCreateDTO>
}