import { app } from "../../../../__mocks__/app"
import request from "supertest"

describe("Create user controller", () => {
	it("Should be able to validate create user for POST protocol", async () => {		
		const sut = await request(app).post("/api/v1/user/create").send({
			fullName: "Full Name",
			age: 18,
			username: "username",
			password: "12345678",
			profilePictureUrl: "http://exemplo.com/profile.png"
		})

		expect(sut.status).toBe(201)
		expect(sut.body.code).toEqual(201)
		expect(sut.body.message).toEqual("Usuário cadastrado com sucesso!")
		expect(typeof sut.body.result.userId === "string").toBeTruthy()
		expect(sut.body.result.fullName).toEqual("Full Name")
		expect(sut.body.result.age).toEqual(18)
		expect(sut.body.result.username).toEqual("username")
		expect(sut.body.result.password).toEqual("12345678")
		expect(sut.body.result.profilePictureUrl).toEqual("http://exemplo.com/profile.png")
	})

	it("Should be able to validate create user for POST protocol", async () => {		
		const sut = await request(app).post("/api/v1/user/create").send({
			age: 18,
			username: "username",
			password: "12345678",
			profilePictureUrl: "http://exemplo.com/profile.png"
		})

		expect(sut.status).toBe(400)
		expect(sut.body).toEqual({
			code: 400,
			message: {
				error: "Nome completo é obrigatório!",
				errorCode: "PARAMS_ERROR"
			}
		})
	})
})