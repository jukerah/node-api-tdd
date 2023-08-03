import { IProductsRepository } from "../../../../application/interfaces/repositories"
import { IInputCreateDTO, IOutputCreateDTO } from "../../../../application/interfaces/dtos/repositories/products"
import { inMemoryDatabase } from "../../in-memory-database"

export class InMemoryProductsRepository implements IProductsRepository {
	async create(input: IInputCreateDTO): Promise<IOutputCreateDTO> {
		inMemoryDatabase.products.push(input)
		return input
	}
}