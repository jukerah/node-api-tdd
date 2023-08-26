import { type IOutputUseCaseErrorDTO } from "@/application/interfaces/dtos/errors/use-cases"
import {
  type IInputCreateUserUseCaseDTO,
  type IOutputCreateUserUseCaseDTO
} from "@/application/interfaces/dtos/use-cases"

export interface ICreateUserUseCase {
  execute: (
    input: IInputCreateUserUseCaseDTO
  ) => Promise<IOutputCreateUserUseCaseDTO | IOutputUseCaseErrorDTO>
}
