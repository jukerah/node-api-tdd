import { IRequestCreateDTO } from "../../../interfaces/dtos/controllers/users"
import { IInputCreateDTO } from "../../../interfaces/dtos/use-cases/users"

export class CreateUserDTO {
	execute(request: IRequestCreateDTO) {
		const inputDTO: IInputCreateDTO = {
			fullName: request.body.fullName,
			age: request.body.age,
			username: request.body.username,
			password: request.body.password,
			profilePictureUrl: request.body.profilePictureUrl
		}

		return inputDTO
	}
}