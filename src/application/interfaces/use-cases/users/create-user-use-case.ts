import { IOutputUseCaseErrorDTO } from "../../dtos/errors/use-cases"
import {
  IInputCreateUserUseCaseDTO,
  IOutputCreateUserUseCaseDTO
} from "../../dtos/use-cases"

export interface ICreateUserUseCase {
  execute(
    input: IInputCreateUserUseCaseDTO
  ): Promise<IOutputCreateUserUseCaseDTO | IOutputUseCaseErrorDTO>
}
