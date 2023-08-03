import { randomUUID } from "../random-uuid"

describe("Generators", () => {
	it("should be able to validate if the generated uuid is valid format", () => {
		const uuid = randomUUID()
		const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

		const sut = uuidRegex.test(uuid)
    
		expect(sut).toBeTruthy()
	})
})