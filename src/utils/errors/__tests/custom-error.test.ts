import { customError } from "@/utils/errors/custom-error"

describe("Custom Error", () => {
  it("should be able to create new error", async () => {
    try {
      customError("New Error")
    } catch (error: any) {
      const sut = error

      expect(sut.message).toEqual("New Error")
    }
  })
})
