import { ICreateUserController } from "../../interfaces/controllers"
import { CreateUserUseCase } from "../../use-cases"
import { CreateUserDTO } from "../../dtos/controllers"
import { IRequestCreateDTO, IResponseCreateDTO } from "../../interfaces/dtos/controllers/users"

export class CreateUserController implements ICreateUserController {
	private createUserDTO: CreateUserDTO

	constructor (private createUserUseCase: CreateUserUseCase) {
		this.createUserDTO = new CreateUserDTO()
	}

	async handle(request: IRequestCreateDTO, response: IResponseCreateDTO) {
		const input = this.createUserDTO.execute(request)
		const output = await this.createUserUseCase.execute(input)
		return response.status(output.code).json(output)
	}
}