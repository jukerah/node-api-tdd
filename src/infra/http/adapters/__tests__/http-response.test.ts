import {
  badRequest,
  ok,
  created,
  unavailable,
  forbidden,
  unauthorized,
  serverError,
  noContent
} from "@/infra/http/adapters/http-response"

describe("HTTP response", () => {
  it("should be able to return bad request", async () => {
    const sut = badRequest("Error message")

    expect(sut).toEqual({
      code: 400,
      message: {
        error: "Error message",
        errorCode: "PARAMS_ERROR"
      }
    })
  })

  it("should be able to return ok", async () => {
    let sut = ok({
      result: {
        message: "Message ok"
      }
    })

    expect(sut).toEqual({
      code: 200,
      result: {
        message: "Message ok"
      }
    })

    sut = ok({
      message: "Message ok",
      result: null
    })

    expect(sut).toEqual({
      code: 200,
      message: "Message ok",
      result: null
    })
  })

  it("should be able to return created", async () => {
    const sut = created({
      result: {
        message: "Message created"
      }
    })

    expect(sut).toEqual({
      code: 201,
      result: {
        message: "Message created"
      }
    })
  })

  it("should be able to return unavailable", async () => {
    const sut = unavailable("Error message")

    expect(sut).toEqual({
      code: 503,
      message: {
        error: "Error message",
        errorCode: "SERVICE_UNAVAILABLE"
      }
    })
  })

  it("should be able to return forbidden", async () => {
    const sut = forbidden("Error message")

    expect(sut).toEqual({
      code: 403,
      message: {
        error: "Error message",
        errorCode: "FORBIDDEN"
      }
    })
  })

  it("should be able to return unauthorized", async () => {
    const sut = unauthorized("Error message")

    expect(sut).toEqual({
      code: 401,
      message: {
        error: "Error message",
        errorCode: "UNAUTHORIZED"
      }
    })
  })

  it("should be able to return server error", async () => {
    const sut = serverError("Error message")

    expect(sut).toEqual({
      code: 500,
      message: {
        error: "Error message",
        errorCode: "INTERNAL_ERROR"
      }
    })
  })

  it("should be able to return server no content", async () => {
    let sut = noContent({
      result: null
    })

    expect(sut).toEqual({
      code: 204,
      result: null
    })

    sut = noContent({
      message: "Message no content",
      result: null
    })

    expect(sut).toEqual({
      code: 204,
      message: "Message no content",
      result: null
    })
  })
})
