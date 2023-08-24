import { ICreateUserUseCase } from "../../interfaces/use-cases"
import { IInputCreateUserUseCaseDTO } from "../../interfaces/dtos/use-cases"
import { IUsersRepository } from "../../interfaces/repositories"
import { UserEntity } from "../../../entities"

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  async execute(input: IInputCreateUserUseCaseDTO) {
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
