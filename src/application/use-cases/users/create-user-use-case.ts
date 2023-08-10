import { ICreateUserUseCase } from "../../interfaces/use-cases"
import { IInputCreateDTO } from "../../interfaces/dtos/use-cases/users"
import { IUsersRepository } from "../../interfaces/repositories"
import { UserEntity } from "../../../entities"

export class CreateUserUseCase implements ICreateUserUseCase {
	constructor(private userRepository: IUsersRepository) {}

	async execute(input: IInputCreateDTO) {
		try {
			const createUser = UserEntity.create(input)
			const user = await this.userRepository.create(createUser)
			return {
				code: 201,
				result: user,
				message: "Usuário cadastrado com sucesso!"
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