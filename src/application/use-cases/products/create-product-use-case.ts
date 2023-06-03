import { ICreateProductUseCase } from "../../interfaces/use-cases/products/create-product-use-case"
import { IInputCreateDTO, IOutputCreateDTO } from "../../interfaces/dtos/use-cases/products/create-product-dto"
import { ProductsRepository } from "../../interfaces/repositories/products-repository"
import { ProductEntity } from "../../../entities/product-entity"

export class CreateProductUseCase implements ICreateProductUseCase {
  constructor(private productRepository: ProductsRepository) {}

  async execute(input: IInputCreateDTO): Promise<IOutputCreateDTO> {
    try {
      const createProduct = ProductEntity.create(input)
      const product = await this.productRepository.create(createProduct)
      const output = {
        result: product,
        message: "Produto cadastrado com sucesso!"
      }
      return output
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}