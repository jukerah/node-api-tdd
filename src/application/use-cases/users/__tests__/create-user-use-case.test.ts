import { type IUsersRepository } from "@/application/interfaces/repositories"
import { CreateUserUseCase } from "@/application/use-cases"
import { InMemoryUsersRepository } from "@/infra/database/repositories/in-memory"
import {
  type IInputCreateUserUseCaseDTO,
  type IOutputCreateUserUseCaseDTO
} from "@/application/interfaces/use-cases"

describe("Create user use case", () => {
  let usersRepository: IUsersRepository
  let createUserUseCase: CreateUserUseCase

  beforeAll(() => {
    usersRepository = new InMemoryUsersRepository()
    createUserUseCase = new CreateUserUseCase(usersRepository)
  })

  it("should be able to create user", async () => {
    const input: IInputCreateUserUseCaseDTO = {
      fullName: "Full Name",
      age: 18,
      username: "username",
      password: "12345678",
      profilePictureUrl: "http://exemplo.com/profile.png"
    }

    const sut = (await createUserUseCase.execute(
      input
    )) as IOutputCreateUserUseCaseDTO

    expect(sut.message).toEqual("Usuário cadastrado com sucesso!")
    expect(typeof sut.result.userId === "string").toBeTruthy()
    expect(sut.result.fullName).toEqual(input.fullName)
    expect(sut.result.age).toEqual(input.age)
    expect(sut.result.username).toEqual(input.username)
    expect(typeof sut.result.password === "string").toBeTruthy()
    expect(sut.result.profilePictureUrl).toEqual(input.profilePictureUrl)
  })

  it("should be able to return error when params is empty", async () => {
    const input: any = {
      age: 18,
      username: "username",
      password: "12345678",
      profilePictureUrl: "http://exemplo.com/profile.png"
    }

    const sut = await createUserUseCase.execute(input)

    expect(sut).toEqual({
      code: 503,
      message: {
        errorCode: "SERVICE_UNAVAILABLE",
        error: "Nome completo é obrigatório!"
      }
    })
  })
})
