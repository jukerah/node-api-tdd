import { httpControllerAdapter } from "../../../../infra/http/adapters"
import { PrismaUsersRepository } from "../../../../infra/database/repositories/prisma"
import { CreateUserController } from "../../../controllers"
import { CreateUserUseCase } from "../../../use-cases"

export const createUserControllerFactory = () => {
	const userRepository = new PrismaUsersRepository()
	const createUserUseCase = new CreateUserUseCase(userRepository)
	const createUserController = new CreateUserController(createUserUseCase)
	return httpControllerAdapter(createUserController)
}