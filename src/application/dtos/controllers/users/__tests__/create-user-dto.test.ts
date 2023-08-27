import {
  type IInputCreateUserUseCaseDTO,
  type IOutputCreateUserUseCaseDTO
} from "@/application/interfaces/use-cases"
import { validateMock } from "@/application/factories/__mocks__/helpers"
import { CreateUserDTO } from "@/application/dtos/controllers"

describe("Create user dto", () => {
  let createUserDTO: CreateUserDTO

  beforeAll(() => {
    createUserDTO = new CreateUserDTO(validateMock)
  })

  it("should be able to return inputDTO", async () => {
    const input: any = {
      body: {
        fullName: "Full Name",
        age: 18,
        username: "username",
        password: "12345678",
        profilePictureUrl: "http://exemplo.com/profile.png"
      }
    }

    const sut = createUserDTO.input(input) as IInputCreateUserUseCaseDTO

    expect(sut.fullName).toEqual(input.body.fullName)
    expect(sut.age).toEqual(input.body.age)
    expect(sut.username).toEqual(input.body.username)
    expect(sut.password).toEqual(input.body.password)
    expect(sut.profilePictureUrl).toEqual(input.body.profilePictureUrl)
  })

  it("should be able to return outputDTO", async () => {
    const input = {
      code: 201,
      message: "Usuário cadastrado com sucesso!",
      result: {
        userId: "dc442be1-642a-48b6-b8b0-7b6208d23c35",
        fullName: "Full Name",
        age: 18,
        username: "username",
        password: "12345678",
        profilePictureUrl: "https://exemplo.com/profile.png"
      }
    }

    const sut = createUserDTO.output(input) as IOutputCreateUserUseCaseDTO

    expect(sut).toEqual({
      code: 201,
      message: "Usuário cadastrado com sucesso!",
      result: {
        userId: "dc442be1-642a-48b6-b8b0-7b6208d23c35",
        fullName: "Full Name",
        age: 18,
        username: "username",
        profilePictureUrl: "https://exemplo.com/profile.png"
      }
    })
  })

  it("should be able to return outputDTO", async () => {
    const input: any = {
      code: 503,
      message: "Error name!"
    }

    const sut = createUserDTO.output(input) as IOutputCreateUserUseCaseDTO

    expect(sut).toEqual({
      code: 503,
      message: "Error name!"
    })
  })
})
