import { app } from "../../../../__mocks__/app"
import request from "supertest"

describe("Create product controller", () => {
	it("Should be able to validate create product for POST protocol", async () => {		
		const sut = await request(app).post("/api/v1/product/create").send({
			name: "name",
			description: "description",
			price: 11,
			amount: 5
		})

		expect(sut.status).toBe(201)
		expect(sut.body.code).toEqual(201)
		expect(sut.body.message).toEqual("Produto cadastrado com sucesso!")
		expect(typeof sut.body.result.productId === "string").toBeTruthy()
		expect(sut.body.result.name).toEqual("name")
		expect(sut.body.result.description).toEqual("description")
		expect(sut.body.result.price).toEqual(11)
		expect(sut.body.result.amount).toEqual(5)
	})

	it("Should be able to validate create product for POST protocol", async () => {		
		const sut = await request(app).post("/api/v1/product/create").send({
			description: "description",
			price: 11,
			amount: 5
		})

		expect(sut.status).toBe(400)
		expect(sut.body).toEqual({
			code: 400,
			message: {
				error: "Nome do produto é obrigatório!",
				errorCode: "PARAMS_ERROR"
			}
		})
	})
})