import { IInputCreateDTO, IOutputCreateDTO } from "../../../../interfaces/dtos/use-cases/products"
import { IRequestCreateDTO } from "../../../../interfaces/dtos/controllers/products"
import { CreateProductDTO } from "../create-product-dto"

describe("Create product dto", () => {
	let createProductDTO: CreateProductDTO

	beforeAll(() => {
		createProductDTO = new CreateProductDTO()
	})

	it("should be able to input create product", async () => {
		const input = {
			body: {
				name: "name",
				description: "description",
				price: 11,
				amount: 5
			}
		} as IRequestCreateDTO

		const sut = createProductDTO.execute(input) as IInputCreateDTO
    
		expect(sut.name).toEqual(input.body.name)
		expect(sut.description).toEqual(input.body.description)
		expect(sut.price).toEqual(input.body.price)
		expect(sut.amount).toEqual(input.body.amount)
	})
})