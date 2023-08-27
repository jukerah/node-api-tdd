/* eslint-disable max-len */
import { validateMock } from "@/application/factories/__mocks__/helpers"
import { crypt } from "@/application/helpers/crypt"
import dotenv from "@/libs/dotenv"
dotenv.config({ path: ".env.test" })

describe("Crypt", () => {
  it("should be able to validate if the generated uuid is valid format", () => {
    const uuid = crypt.randomUUID()
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

    const sut = uuidRegex.test(uuid)

    expect(sut).toBeTruthy()
  })

  it("must be able to encrypt data and then compare whether the original data is compatible with the encrypted value", async () => {
    const data = "test"
    const rounds = 8

    const sut = await crypt.createHash(data, rounds)

    expect(crypt.compareHash(data, sut)).toBeTruthy()
  })

  it("should be able to validate generated token", () => {
    const userId = "123"

    const sut = crypt.token(userId)

    expect(validateMock.stringType(sut, "Token")).toBeTruthy()
  })

  it("should be able to validate decrypt token", () => {
    const userId = "123"
    const token = crypt.token(userId)
    const request: any = {
      headers: {
        authorization: `Bearer ${token}`
      }
    }

    const sut: any = crypt.decryptToken(request)

    if (sut) expect(validateMock.stringType(sut, "userId")).toBeTruthy()
  })

  it("should be able to return error when no token exists", () => {
    try {
      const request: any = {
        headers: {}
      }
      crypt.decryptToken(request)
    } catch (error: any) {
      const sut = error

      expect(sut.message).toMatch("Desculpa, mas você não está autenticado!")
    }
  })

  it("should be able to return error when token is not valid", () => {
    try {
      const token = 1234
      const request: any = {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
      crypt.decryptToken(request)
    } catch (error: any) {
      const sut = error

      expect(sut.message).toMatch("Desculpa, mas você não está autenticado!")
    }
  })
})
