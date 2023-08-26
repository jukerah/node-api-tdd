import { httpControllerAdapter } from "@/infra/http/adapters"
import { InMemoryUsersRepository } from "@/infra/database/repositories/in-memory"
import { CreateUserController } from "@/application/controllers"
import { CreateUserDTO } from "@/application/dtos/controllers"
import { CreateUserUseCase } from "@/application/use-cases"
import { validateMock } from "@/application/factories/__mocks__/helpers"

export const createUserControllerMock = (): any => {
  const userRepository = new InMemoryUsersRepository()
  const createUserUseCase = new CreateUserUseCase(userRepository)
  const createUserController = new CreateUserController(
    new CreateUserDTO(validateMock),
    createUserUseCase
  )

  return httpControllerAdapter(createUserController)
}
