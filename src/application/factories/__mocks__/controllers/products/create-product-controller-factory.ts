import { httpControllerAdapter } from "../../../../../infra/http/adapters"
import { InMemoryProductsRepository } from "../../../../../infra/database/repositories/in-memory"
import { CreateProductController } from "../../../../controllers"
import { CreateProductUseCase } from "../../../../use-cases"

export const createProductControllerFactoryMock = () => {
	const productRepository = new InMemoryProductsRepository()
	const createProductUseCase = new CreateProductUseCase(productRepository)
	const createProductController = new CreateProductController(createProductUseCase)
	return httpControllerAdapter(createProductController)
}