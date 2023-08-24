import { Validate } from "../../../helpers"
import { IRequestCreateUserControllerDTO } from "../../../interfaces/controllers"
import { IOutputUseCaseErrorDTO } from "../../../interfaces/dtos/errors/use-cases"
import { IOutputCreateUserUseCaseDTO } from "../../../interfaces/dtos/use-cases"

export class CreateUserDTO {
  constructor(private validate: Validate) {}

  input(request: IRequestCreateUserControllerDTO) {
    const inputDTO = {
      fullName: request.body.fullName,
      age: request.body.age,
      username: request.body.username,
      password: request.body.password,
      profilePictureUrl: request.body.profilePictureUrl
    }

    this.validate.required(inputDTO.fullName, "Nome completo", "RETURN_ERROR")
    this.validate.stringType(inputDTO.fullName, "Nome completo", "RETURN_ERROR")

    this.validate.required(inputDTO.age, "Idade", "RETURN_ERROR")
    this.validate.numberType(inputDTO.age, "Idade", "RETURN_ERROR")

    this.validate.required(inputDTO.username, "Usuário", "RETURN_ERROR")
    this.validate.stringType(inputDTO.username, "Usuário", "RETURN_ERROR")

    this.validate.required(inputDTO.password, "Senha", "RETURN_ERROR")
    this.validate.stringType(inputDTO.password, "Senha", "RETURN_ERROR")

    this.validate.required(
      inputDTO.profilePictureUrl,
      "Url da imagem de perfil",
      "RETURN_ERROR"
    )
    this.validate.stringType(
      inputDTO.profilePictureUrl,
      "Url da imagem de perfil",
      "RETURN_ERROR"
    )

    return inputDTO
  }

  output(input: IOutputCreateUserUseCaseDTO | IOutputUseCaseErrorDTO) {
    if (input.code === 201 && "result" in input) {
      const outputDTO = {
        code: input.code,
        message: input.message,
        result: {
          userId: input.result.userId,
          fullName: input.result.fullName,
          age: input.result.age,
          username: input.result.username,
          profilePictureUrl: input.result.profilePictureUrl
        }
      }

      return outputDTO
    } else {
      const outputDTO = input
      return outputDTO
    }
  }
}
