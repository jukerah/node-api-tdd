import { IRequestCreateDTO } from "../../../interfaces/dtos/controllers/products"
import { IInputCreateDTO } from "../../../interfaces/dtos/use-cases/products"

export class CreateProductDTO {
	execute(request: IRequestCreateDTO) {
		const inputDTO: IInputCreateDTO = {
			name: request.body.name,
			description: request.body.description,
			price: request.body.price,
			amount: request.body.amount
		}

		return inputDTO
	}
}