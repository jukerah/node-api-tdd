import { IOutputErrorDTO } from "../../dtos/errors/use-cases"
import { IInputCreateDTO, IOutputCreateDTO } from "../../dtos/use-cases/products"

export interface ICreateProductUseCase {
  execute(input: IInputCreateDTO): Promise<IOutputCreateDTO | IOutputErrorDTO>
}