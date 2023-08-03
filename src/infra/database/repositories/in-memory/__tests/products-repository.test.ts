import { randomUUID } from "../../../../../application/helpers"
import { IInputCreateDTO } from "../../../../../application/interfaces/dtos/repositories/products"
import { IProductsRepository } from "../../../../../application/interfaces/repositories"
import { InMemoryProductsRepository } from "../products-repository"

describe("In memory products repository", () => {
	let productsRepository: IProductsRepository

	beforeAll(() => {
		productsRepository = new InMemoryProductsRepository()
	})

	it("should be able to create product", async () => {
		const input: IInputCreateDTO = {
			productId: randomUUID(),
			name: "name",
			description: "description",
			price: 11,
			amount: 5
		}

		const sut = await productsRepository.create(input)
   
		expect(sut).toEqual(input)
	})
})