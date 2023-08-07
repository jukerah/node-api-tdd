import { app } from "../../../__mocks__/app"
import router from "../../../infra/routes/__mocks__"
import request from "supertest"
import { isAuthenticatedMiddlewareFactoryMock } from "../../factories/__mocks__/middlewares"
import { crypt } from "../../helpers"

describe("Is authenticated middleware", () => {
	let token: string
	router.get("/api/v1/test-is-authenticated",	isAuthenticatedMiddlewareFactoryMock(), (request, response) => {
		response.sendStatus(200)
	})

	beforeAll(async () => {
		const userId = "123"
		token = crypt.token(userId)
	})

	it("should return status 200 if user is authenticated", async () => {		
		const sut = await request(app).get("/api/v1/test-is-authenticated").send()
			.set("Authorization", `Bearer ${token}`)

		expect(sut.status).toBe(200)
	})

	it("should return status 400 if user is not authenticated or token is invalid", async () => {		
		const sut = await request(app).get("/api/v1/test-is-authenticated").send()
			.set("Authorization", "Bearer 321")

		expect(sut.status).toBe(400)
		expect(sut.body).toEqual("Desculpa, mas você não está autenticado!")
	})
})