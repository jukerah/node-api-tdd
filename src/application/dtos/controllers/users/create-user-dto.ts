import { Validate } from "../../../helpers"
import { IRequestCreateDTO } from "../../../interfaces/dtos/controllers/users"
import { IInputCreateDTO } from "../../../interfaces/dtos/use-cases/users"

export class CreateUserDTO {
	constructor(private validate: Validate) {}

	execute(request: IRequestCreateDTO) {
		const inputDTO: IInputCreateDTO = {
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

		this.validate.required(inputDTO.profilePictureUrl, "Url da imagem de perfil", "RETURN_ERROR")
		this.validate.stringType(inputDTO.profilePictureUrl, "Url da imagem de perfil", "RETURN_ERROR")

		return inputDTO
	}
}