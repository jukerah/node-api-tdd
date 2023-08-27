import { type IUsersRepository } from "@/application/interfaces/repositories"
import { type IOutputUseCaseErrorDTO } from "@/application/interfaces/errors/use-cases"
import { UserEntity } from "@/entities"
import { created, unavailable } from "@/infra/http/adapters/http-response"
import {
  type ICreateUserUseCase,
  type IInputCreateUserUseCaseDTO,
  type IOutputCreateUserUseCaseDTO
} from "@/application/interfaces/use-cases"

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor (private readonly userRepository: IUsersRepository) {}

  async execute (input: IInputCreateUserUseCaseDTO): Promise<IOutputCreateUserUseCaseDTO | IOutputUseCaseErrorDTO> {
    try {
      const user = await UserEntity.create(input)
      const createdUser = await this.userRepository.create(user)
      return created({
        message: "Usuário cadastrado com sucesso!",
        result: createdUser
      })
    } catch (error: any) {
      return unavailable(error.message)
    }
  }
}
