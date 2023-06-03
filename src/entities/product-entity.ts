import { IInputCreateDTO } from "../application/interfaces/dtos/use-cases/products/create-product-dto"

export class ProductEntity {
  public readonly productId: string
  public name: string
  public description: string
  public price: number
  public amount: number

  private constructor(input: object) {
    return Object.assign(this, input)
  }

  static create(input: IInputCreateDTO) {		
    const product = new ProductEntity(input)
		return product
	}
}