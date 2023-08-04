import { httpControllerAdapter } from "../../../../infra/http/adapters"
import { PrismaProductsRepository } from "../../../../infra/database/repositories/prisma"
import { CreateProductController } from "../../../controllers"
import { CreateProductUseCase } from "../../../use-cases"

export const createProductControllerFactory = () => {
	const productRepository = new PrismaProductsRepository()
	const createProductUseCase = new CreateProductUseCase(productRepository)
	const createProductController = new CreateProductController(createProductUseCase)
	return httpControllerAdapter(createProductController)
}