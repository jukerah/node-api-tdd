import { ICreateUserController } from "../../interfaces/controllers"
import { CreateUserUseCase } from "../../use-cases"
import { CreateUserDTO } from "../../dtos/controllers"
import { IRequestCreateDTO, IResponseCreateDTO } from "../../interfaces/dtos/controllers/users"

export class CreateUserController implements ICreateUserController {
	constructor (
		private createUserDTO: CreateUserDTO,
		private createUserUseCase: CreateUserUseCase
	) {}

	async handle(request: IRequestCreateDTO, response: IResponseCreateDTO) {
		try {
			const input = this.createUserDTO.execute(request)
			const output = await this.createUserUseCase.execute(input)
			return response.status(output.code).json(output)
		} catch (error: any) {
			return response.status(400).json({
				code: 400,
				message: {
					errorCode: "PARAMS_ERROR",
					error: error.message
				}
			})
		}
	}
}