import { IRequestCreateDTO } from "../../../interfaces/dtos/controllers/products/create-product-dto"
import { IInputCreateDTO, IOutputCreateDTO } from "../../../interfaces/dtos/use-cases/products/create-product-dto"

export class CreateProductDTO {
	input(request: IRequestCreateDTO) {
		const inputDTO: IInputCreateDTO = {
			name: request.body.name,
			description: request.body.description,
			price: request.body.price,
			amount: request.body.amount
		}

    if(!inputDTO.name) throw new Error("Nome do produto é obrigatório!")
    if(!inputDTO.description) throw new Error("Descrição do produto é obrigatório!")
    if(!inputDTO.price && inputDTO.price !== 0) throw new Error("Preço do produto é obrigatório!")
    if(!inputDTO.amount || inputDTO.amount === 0) throw new Error("Quantidade do produto é obrigatório!")

		return inputDTO
	}

	output(response: IOutputCreateDTO) {
		return response.message
	}
}