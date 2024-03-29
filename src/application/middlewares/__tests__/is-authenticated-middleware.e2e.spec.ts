import request from "supertest"
import { app } from "@/__mocks__/app"
import { routerMock } from "@/application/routes/__mocks__"
import { isAuthenticatedMiddlewareMock } from "@/application/factories/__mocks__/middlewares"
import { crypt } from "@/application/helpers"

describe("Is authenticated middleware", () => {
  routerMock.get(
    "/api/v1/test-is-authenticated",
    isAuthenticatedMiddlewareMock(),
    (request, response) => {
      response.sendStatus(200)
    }
  )

  it("should return status 200 if user is authenticated", async () => {
    const userId = "eeafe0d2-cc98-42f9-9062-ff9ec0375356"
    const token = crypt.token(userId)
    const sut = await request(app)
      .get("/api/v1/test-is-authenticated")
      .send()
      .set("Authorization", `Bearer ${token}`)

    expect(sut.status).toBe(200)
  })

  it("should return status 400 if user is not exists", async () => {
    const userId = "123"
    const token = crypt.token(userId)
    const sut = await request(app)
      .get("/api/v1/test-is-authenticated")
      .send()
      .set("Authorization", `Bearer ${token}`)

    expect(sut.status).toBe(400)
    expect(sut.body).toEqual({
      code: 400,
      message: {
        error: "Usuário inválido!",
        errorCode: "PARAMS_ERROR"
      }
    })
  })

  it("should return status 400 if token is invalid", async () => {
    const sut = await request(app)
      .get("/api/v1/test-is-authenticated")
      .send()
      .set("Authorization", "Bearer 321")

    expect(sut.status).toBe(400)
    expect(sut.body).toEqual({
      code: 400,
      message: {
        error: "Desculpa, mas você não está autenticado!",
        errorCode: "PARAMS_ERROR"
      }
    })
  })
})
