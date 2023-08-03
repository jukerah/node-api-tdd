import { ICreateProductController } from "../../interfaces/controllers"
import { CreateProductUseCase } from "../../use-cases"
import { CreateProductDTO } from "../../dtos/controllers"
import { IRequestCreateDTO, IResponseCreateDTO } from "../../interfaces/dtos/controllers/products"

export class CreateProductController implements ICreateProductController {
	private createProductDTO: CreateProductDTO

	constructor (private createProductUseCase: CreateProductUseCase) {
		this.createProductDTO = new CreateProductDTO()
	}

	async handle(request: IRequestCreateDTO, response: IResponseCreateDTO) {
		const input = this.createProductDTO.execute(request)
		const output = await this.createProductUseCase.execute(input)
		return response.status(output.code).json(output)
	}
}