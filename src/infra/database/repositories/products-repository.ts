import crypto from "crypto"
import { ProductsRepository } from "../../../application/interfaces/repositories/products-repository"
import { IInputCreateDTO } from "../../../application/interfaces/dtos/repositories/products/create-product-dto"
import { ProductEntity } from "../../../entities/product-entity"
import inMemoryDatabase from "../in-memory-database"

export class InMemoryProductsRepository implements ProductsRepository {
  async create(input: IInputCreateDTO): Promise<ProductEntity> {
    const data = {
      productId: crypto.randomUUID(),
      name: input.name,
      description: input.description,
      price: input.price,
      amount: input.amount
    }
    inMemoryDatabase.products.push(data)
    return data
  }
}