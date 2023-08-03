import { IProductsRepository } from "../../../interfaces/repositories"
import { CreateProductUseCase } from "../create-product-use-case"
import { InMemoryProductsRepository } from "../../../../infra/database/repositories/in-memory"
import { IInputCreateDTO, IOutputCreateDTO } from "../../../interfaces/dtos/use-cases/products"

describe("Create product use case", () => {
	let productsRepository: IProductsRepository
	let createProductUseCase: CreateProductUseCase

	beforeAll(() => {
		productsRepository = new InMemoryProductsRepository()
		createProductUseCase = new CreateProductUseCase(productsRepository)
	})

	it("should be able to create product", async () => {
		const input: IInputCreateDTO = {
			name: "name",
			description: "description",
			price: 11,
			amount: 5
		}

		const sut = await createProductUseCase.execute(input) as IOutputCreateDTO

		expect(sut.message).toEqual("Produto cadastrado com sucesso!")
		expect(typeof sut.result.productId === "string").toBeTruthy()
		expect(sut.result.name).toEqual(input.name)
		expect(sut.result.description).toEqual(input.description)
		expect(sut.result.price).toEqual(input.price)
		expect(sut.result.amount).toEqual(input.amount)
	})

	it("should be able to create product", async () => {
		try {
			const input: IInputCreateDTO = {
				name: "name",
				description: "description",
				price: 11,
				amount: 5
			}
			const productsRepository: any = ""
			const invalidCreateProductUseCase = new CreateProductUseCase(productsRepository)
			await invalidCreateProductUseCase.execute(input)
		} catch (error: any) {
      
			const sut = error
      
			expect(sut.message).toEqual("this.productRepository.create is not a function")
		}
	})
})