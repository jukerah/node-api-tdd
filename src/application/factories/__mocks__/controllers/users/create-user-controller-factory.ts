import { httpControllerAdapter } from "../../../../../infra/http/adapters"
import { InMemoryUsersRepository } from "../../../../../infra/database/repositories/in-memory"
import { CreateUserController } from "../../../../controllers"
import { CreateUserDTO } from "../../../../dtos/controllers"
import { CreateUserUseCase } from "../../../../use-cases"
import { validateMock } from "../../helpers"

export const createUserControllerFactoryMock = () => {
	const userRepository = new InMemoryUsersRepository()
	const createUserUseCase = new CreateUserUseCase(userRepository)
	const createUserController = new CreateUserController(
		new CreateUserDTO(validateMock),
		createUserUseCase
	)
	
	return httpControllerAdapter(createUserController)
}