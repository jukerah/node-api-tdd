import { httpControllerAdapter } from "../../../../infra/adapters/http-controller-adapter"
import { InMemoryProductsRepository } from "../../../../infra/database/repositories/products-repository"
import { CreateProductController } from "../../../controllers/products/create-product-controller"
import { CreateProductUseCase } from "../../../use-cases/products/create-product-use-case"

const createProductController = () => {
  const productRepository = new InMemoryProductsRepository()
  const createProductUseCase = new CreateProductUseCase(productRepository)
  const createProductController = new CreateProductController(createProductUseCase)
  return httpControllerAdapter(createProductController)
}

export default createProductController