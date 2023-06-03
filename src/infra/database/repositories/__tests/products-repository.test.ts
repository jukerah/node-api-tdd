import { IInputCreateDTO } from "../../../../application/interfaces/dtos/repositories/products/create-product-dto"
import { ProductsRepository } from "../../../../application/interfaces/repositories/products-repository"
import { ProductEntity } from "../../../../entities/product-entity"
import { InMemoryProductsRepository } from "../products-repository"

describe("In memory products repository", () => {
	let productsRepository: ProductsRepository

	beforeAll(() => {
		productsRepository = new InMemoryProductsRepository()
	})

	it("should be able to create product", async () => {
		const input: IInputCreateDTO = {
      name: "name",
      description: "description",
      price: 11,
      amount: 5
    }

		const sut = await productsRepository.create(input) as ProductEntity
   
    expect(typeof sut.productId === "string").toBeTruthy()
		expect(sut.name).toEqual(input.name)
    expect(sut.description).toEqual(input.description)
    expect(sut.price).toEqual(input.price)
    expect(sut.amount).toEqual(input.amount)
	})
})