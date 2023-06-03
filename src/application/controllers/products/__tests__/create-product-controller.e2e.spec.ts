import { app } from "../../../../app"
import request from "supertest"

describe("Create product controller", () => {
	it("Should be able to validate create product for POST protocol", async () => {		
		const sut = await request(app).post("/create-product").send({
      name: "name",
      description: "description",
      price: 11,
      amount: 5
    })

		expect(sut.status).toBe(201)
		expect(sut.body).toEqual("Produto cadastrado com sucesso!")
	})
})