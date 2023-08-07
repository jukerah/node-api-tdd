import { Entity } from "./entity"
import { validate } from "../application/factories/helpers"
import { IInputCreateDTO, IOutputCreateDTO } from "../application/interfaces/dtos/entities/users"

type UserParams = {
  fullName: string
  age: number
  username: string
  password: string
	profilePictureUrl: string
}

export class UserEntity extends Entity<UserParams> {	
	constructor(params: UserParams, userId?: string) {
		super(params, userId)
	}

	static create(params: IInputCreateDTO, userId?: string): IOutputCreateDTO {		
		validate.required(params.fullName, "Nome completo", "RETURN_ERROR")
		validate.stringType(params.fullName, "Nome completo", "RETURN_ERROR")

		validate.required(params.age, "Idade", "RETURN_ERROR")
		validate.numberType(params.age, "Idade", "RETURN_ERROR")
    
		validate.required(params.username, "Usuário", "RETURN_ERROR")
		validate.stringType(params.username, "Usuário", "RETURN_ERROR")

		validate.required(params.password, "Senha", "RETURN_ERROR")
		validate.stringType(params.password, "Senha", "RETURN_ERROR")

		validate.required(params.profilePictureUrl, "Url da imagem de perfil", "RETURN_ERROR")
		validate.stringType(params.profilePictureUrl, "Url da imagem de perfil", "RETURN_ERROR")

		const user = new UserEntity(params, userId)

		const output = {
			userId: user._id,
			fullName: user.params.fullName,
			age: user.params.age,
			username: user.params.username,
			password: user.params.password,
			profilePictureUrl: user.params.profilePictureUrl
		}
    
		return output
	}
}