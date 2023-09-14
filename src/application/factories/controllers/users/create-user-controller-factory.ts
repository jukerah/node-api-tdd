import { httpControllerAdapter } from "@/infra/http/adapters"
import { PrismaUsersRepository } from "@/infra/database/repositories/prisma"
import { CreateUserController } from "@/application/controllers"
import { CreateUserDTO } from "@/application/dtos/controllers"
import { CreateUserUseCase } from "@/application/use-cases"
import { validate } from "@/application/factories/helpers"

export const createUserController = (): any => {
  const userRepository = new PrismaUsersRepository()
  const createUserUseCase = new CreateUserUseCase(userRepository)
  const controller = new CreateUserController(
    new CreateUserDTO(validate),
    createUserUseCase
  )

  return httpControllerAdapter(controller)
}
