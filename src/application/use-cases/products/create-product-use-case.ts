import { ICreateProductUseCase } from "../../interfaces/use-cases"
import { IInputCreateDTO } from "../../interfaces/dtos/use-cases/products"
import { IProductsRepository } from "../../interfaces/repositories"
import { ProductEntity } from "../../../entities/product-entity"

export class CreateProductUseCase implements ICreateProductUseCase {
	constructor(private productRepository: IProductsRepository) {}

	async execute(input: IInputCreateDTO) {
		try {
			const createProduct = ProductEntity.create(input)
			const product = await this.productRepository.create(createProduct)
			const output = {
				code: 201,
				result: product,
				message: "Produto cadastrado com sucesso!"
			}
			return output
		} catch (error: any) {
			return {
				code: 400,
				message: {
					errorCode: "PARAMS_ERROR",
					error: error.message
				}
			}
		}
	}
}