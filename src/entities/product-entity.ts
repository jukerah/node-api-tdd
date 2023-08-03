import { Entity } from "./entity"
import { validate } from "../application/factories/helpers"
import { IInputCreateDTO, IOutputCreateDTO } from "../application/interfaces/dtos/entities/products"

type ProductParams = {
  name: string
  description: string
  price: number
  amount: number
}

export class ProductEntity extends Entity<ProductParams> {	
	constructor(params: ProductParams, productId?: string) {
		super(params, productId)
	}

	static create(params: IInputCreateDTO, productId?: string): IOutputCreateDTO {		
		validate.required(params.name, "Nome do produto", "RETURN_ERROR")
		validate.stringType(params.name, "Nome do produto")

		validate.required(params.description, "Descrição do produto", "RETURN_ERROR")
		validate.stringType(params.description, "Descrição do produto")
    
		validate.required(params.price, "Preço do produto", "RETURN_ERROR")
		validate.numberType(params.price, "Preço do produto")

		validate.required(params.amount, "Quantidade do produto", "RETURN_ERROR")
		validate.numberType(params.amount, "Quantidade do produto")

		const product = new ProductEntity(params, productId)

		const output = {
			productId: product._id,
			name: product.params.name,
			description: product.params.description,
			price: product.params.price,
			amount: product.params.amount
		}
    
		return output
	}
}