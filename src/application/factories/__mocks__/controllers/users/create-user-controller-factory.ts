import { httpControllerAdapter } from "../../../../../infra/http/adapters"
import { InMemoryUsersRepository } from "../../../../../infra/database/repositories/in-memory"
import { CreateUserController } from "../../../../controllers"
import { CreateUserUseCase } from "../../../../use-cases"

export const createUserControllerFactoryMock = () => {
	const userRepository = new InMemoryUsersRepository()
	const createUserUseCase = new CreateUserUseCase(userRepository)
	const createUserController = new CreateUserController(createUserUseCase)
	return httpControllerAdapter(createUserController)
}