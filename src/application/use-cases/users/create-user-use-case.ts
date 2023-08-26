import { type ICreateUserUseCase } from "@/application/interfaces/use-cases"
import {
  type IInputCreateUserUseCaseDTO,
  type IOutputCreateUserUseCaseDTO
} from "@/application/interfaces/dtos/use-cases"
import { type IUsersRepository } from "@/application/interfaces/repositories"
import { type IOutputUseCaseErrorDTO } from "@/application/interfaces/dtos/errors/use-cases"
import { UserEntity } from "@/entities"

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor (private readonly userRepository: IUsersRepository) {}

  async execute (input: IInputCreateUserUseCaseDTO): Promise<IOutputCreateUserUseCaseDTO | IOutputUseCaseErrorDTO> {
    try {
      const user = await UserEntity.create(input)
      const createdUser = await this.userRepository.create(user)
      return {
        code: 201,
        message: "Usuário cadastrado com sucesso!",
        result: createdUser
      }
    } catch (error: any) {
      return {
        code: 503,
        message: {
          errorCode: "INTERNAL_ERROR",
          error: error.message
        }
      }
    }
  }
}
