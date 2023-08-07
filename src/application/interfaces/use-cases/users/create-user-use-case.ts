import { IOutputErrorDTO } from "../../dtos/errors/use-cases"
import { IInputCreateDTO, IOutputCreateDTO } from "../../dtos/use-cases/users"

export interface ICreateUserUseCase {
  execute(input: IInputCreateDTO): Promise<IOutputCreateDTO | IOutputErrorDTO>
}