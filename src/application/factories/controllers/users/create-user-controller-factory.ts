import { httpControllerAdapter } from "../../../../infra/http/adapters"
import { PrismaUsersRepository } from "../../../../infra/database/repositories/prisma"
import { CreateUserController } from "../../../controllers"
import { CreateUserDTO } from "../../../dtos/controllers"
import { CreateUserUseCase } from "../../../use-cases"
import { validate } from "../../helpers"

export const createUserControllerFactory = () => {
	const userRepository = new PrismaUsersRepository()
	const createUserUseCase = new CreateUserUseCase(userRepository)
	const createUserController = new CreateUserController(
		new CreateUserDTO(validate),
		createUserUseCase
	)
	
	return httpControllerAdapter(createUserController)
}