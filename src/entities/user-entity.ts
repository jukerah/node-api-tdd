import { crypt } from "@/application/helpers"
import { Entity } from "@/entities/entity"
import { validate } from "@/application/factories/helpers"
import {
  type IUserParams,
  type IInputCreateUserEntityDTO,
  type IOutputCreateUserEntityDTO
} from "@/application/interfaces/entities/users"

export class UserEntity extends Entity<IUserParams> {
  constructor (params: IUserParams, userId?: string) {
    super(params, userId)
  }

  static async create (
    params: IInputCreateUserEntityDTO,
    userId?: string
  ): Promise<IOutputCreateUserEntityDTO> {
    validate.required(params.fullName, "Nome completo", "RETURN_ERROR")
    validate.stringType(params.fullName, "Nome completo", "RETURN_ERROR")

    validate.required(params.age, "Idade", "RETURN_ERROR")
    validate.numberType(params.age, "Idade", "RETURN_ERROR")

    validate.required(params.username, "Usuário", "RETURN_ERROR")
    validate.stringType(params.username, "Usuário", "RETURN_ERROR")

    validate.required(params.password, "Senha", "RETURN_ERROR")
    validate.stringType(params.password, "Senha", "RETURN_ERROR")

    validate.required(
      params.profilePictureUrl,
      "Url da imagem de perfil",
      "RETURN_ERROR"
    )
    validate.stringType(
      params.profilePictureUrl,
      "Url da imagem de perfil",
      "RETURN_ERROR"
    )

    const user = new UserEntity(params, userId)

    const output = {
      userId: user._id,
      fullName: user.params.fullName,
      age: user.params.age,
      username: user.params.username,
      password: await crypt.createHash(user.params.password, 8),
      profilePictureUrl: user.params.profilePictureUrl
    }

    return output
  }
}
