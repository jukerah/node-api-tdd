import { IInputCreateDTO, IOutputCreateDTO } from "../../dtos/use-cases/products/create-product-dto"

export interface ICreateProductUseCase {
  execute(input: IInputCreateDTO): Promise<IOutputCreateDTO>
}