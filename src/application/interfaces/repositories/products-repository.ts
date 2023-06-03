import { ProductEntity } from "../../../entities/product-entity"
import { InputCreateDTO } from "../dtos/repositories/products/create-product-dto"

export interface ProductsRepository {
  create(inputDTO: InputCreateDTO): Promise<ProductEntity>
}