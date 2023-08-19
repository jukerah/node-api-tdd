import { validateMock } from "../../factories/__mocks__/helpers"
import { crypt } from "../crypt"

describe("Validators", () => {
	it("should be able to return true if value is a boolean", () => {
		const example = false

		const sut = validateMock.required(example)

		expect(sut).toBeTruthy()
	})

	it("should be able to return true if value is a boolean", () => {
		const example = "Example"

		const sut = validateMock.required(example)

		expect(sut).toBeTruthy()
	})

	it("should be able to return false if value is not a boolean", () => {
		const example = ""

		const sut = validateMock.required(example)

		expect(sut).toBeFalsy()
	})

	it("should be able to return false if value is null", () => {
		const example: any = null

		const sut = validateMock.required(example)

		expect(sut).toBeFalsy()
	})

	it("should be able to return false if value is 0", () => {
		const example = 0

		const sut = validateMock.required(example)

		expect(sut).toBeFalsy()
	})

	it("should be able to return an error when value is empty and RETURN_ERROR parameter is used", () => {
		try {
			const example = 0
			validateMock.required(example, "Example", "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Example é obrigatório!")
		}
	})

	it("should be able to return true when the date is in the format DD/MM/YYYY", () => {
		const date = "03/12/2000"

		const sut = validateMock.shortDateType(date)

		expect(sut).toBeTruthy()
	})

	it("should be able to return FALSE when the date is in the format DD/MM/YYYY", () => {
		const date = "2000/10/03"

		const sut = validateMock.shortDateType(date)

		expect(sut).toBeFalsy()
	})

	it("should be able to return FALSE when the date is in the format DD/MM/YYYY and RETURN_ERROR parameter is used", () => {
		try {
			const date = "2000/12/03"
			validateMock.shortDateType(date, "Example", "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Example deve estar no formato DD/MM/YYYY!")
		}
	})

	it("should be able to return true when the date is of the longDateType", () => {
		const date = new Date()

		const sut = validateMock.longDateType(date)

		expect(sut).toBeTruthy()
	})

	it("should be able to return false when the date is of the longDateType", () => {
		const date: any = "03/12/2000"

		const sut = validateMock.longDateType(date)

		expect(sut).toBeFalsy()
	})

	it("should be able to return an error when the value is not of type date and RETURN_ERROR parameter is used", () => {
		try {
			const example: any = "03/12/2000"
			validateMock.longDateType(example, "Example", "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Example deve estar formato de data!")
		}
	})

	it("should be able to return true when the date is greater than the reference date", () => {
		const date = new Date("2000-2-3")
		const refDate = new Date("2000-2-2")

		const sut = validateMock.dateGreaterThan(date, refDate)
		
		expect(sut).toBeTruthy()
	})

	it("should be able to return false when the date is smaller than the reference date", () => {
		const date = new Date("2000-2-2")
		const refDate = new Date("2000-2-3")

		const sut = validateMock.dateGreaterThan(date, refDate)
		
		expect(sut).toBeFalsy()
	})

	it("should be able to return an error when the date is smaller than the reference date and RETURN_ERROR parameter is used", () => {
		try {
			const date = new Date("2000-2-2")
			const refDate = new Date("2000-2-3")
			validateMock.dateGreaterThan(date, refDate, "Example", "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Example deve ser maior que 3/2/2000!")
		}
	})

	it("should be able to return true when the date is smaller than the reference date", () => {
		const date = new Date("2000-2-2")
		const refDate = new Date("2000-2-3")

		const sut = validateMock.dateLessThan(date, refDate)
		
		expect(sut).toBeTruthy()
	})

	it("should be able to return false when the date is greater than the reference date", () => {
		const date = new Date("2000-2-3")
		const refDate = new Date("2000-2-2")

		const sut = validateMock.dateLessThan(date, refDate)
		
		expect(sut).toBeFalsy()
	})

	it("should be able to return an error when the date is greater than the reference date and RETURN_ERROR parameter is used", () => {
		try {
			const date = new Date("2000-2-3")
			const refDate = new Date("2000-2-2")
			validateMock.dateLessThan(date, refDate, "Example", "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Example deve ser maior que 2/2/2000!")
		}
	})

	it("should be able to return true when value is in the format HH:MM (HOUR:MINUTE)", () => {
		const example = "11:05"

		const sut = validateMock.timeType(example)

		expect(sut).toBeTruthy()
	})

	it("should be able to return false when value is not in the format HH:MM (HOUR:MINUTE)", () => {
		const example = "11:05:03"

		const sut = validateMock.timeType(example)

		expect(sut).toBeFalsy()
	})

	it("should be able to return an error when value is not in the format HH:MM (HOUR:MINUTE) and RETURN_ERROR parameter is used", () => {
		try {
			const example: any = 1105
			validateMock.timeType(example, "Example", "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Example deve estar no formato HH/MM!")
		}
	})

	it("should be able to return true when value is in the uuid format", () => {
		const uuid = crypt.randomUUID()

		const sut = validateMock.uuidType(uuid)

		expect(sut).toBeTruthy()
	})

	it("should be able to return false when value is not in the uuid format", () => {
		const uuid = "123"

		const sut = validateMock.uuidType(uuid)

		expect(sut).toBeFalsy()
	})

	it("should be able to return an error when value is not in the uuid format and RETURN_ERROR parameter is used", () => {
		try {
			const uuid: any = 1105
			validateMock.uuidType(uuid, "Example", "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Example deve ser do tipo uuid!")
		}
	})

	it("should be able to return true when the value is a boolean", () => {
		const example = true

		const sut = validateMock.booleanType(example)

		expect(sut).toBeTruthy()
	})

	it("should be able to return false when the value is not a boolean", () => {
		const example: any = "true"

		const sut = validateMock.booleanType(example)

		expect(sut).toBeFalsy()
	})

	it("should be able to return an error when the value is not a boolean and RETURN_ERROR parameter is used", () => {
		try {
			const example: any = "true"
			validateMock.booleanType(example, "Example", "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Example deve ser do tipo boolean!")
		}
	})

	it("should be able to return true when the value is of number type", () => {
		const example = 1

		const sut = validateMock.numberType(example)

		expect(sut).toBeTruthy()
	})

	it("should be able to return false when the value is not of number type", () => {
		const example: any = false

		const sut = validateMock.numberType(example)

		expect(sut).toBeFalsy()
	})

	it("should be able to return an error when the value is of number type and RETURN_ERROR parameter is used", () => {
		try {
			const example: any = false
			validateMock.numberType(example, "Example", "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Example deve ser do tipo número!")
		}
	})

	it("should be able to return true when the value is of string type", () => {
		const example = "Example"

		const sut = validateMock.stringType(example)

		expect(sut).toBeTruthy()
	})

	it("should be able to return false when the value is not of string type", () => {
		const example: any = true

		const sut = validateMock.stringType(example)

		expect(sut).toBeFalsy()
	})

	it("should be able to return an error when the value is not of string type and RETURN_ERROR parameter is used", () => {
		try {
			const example: any = true
			validateMock.stringType(example, "Example", "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Example deve ser do tipo string!")
		}
	})

	it("should be able to return false when the character count does not exceed the limit", () => {
		const example = "example"

		const sut = validateMock.maxLength(example, 7)

		expect(sut).toBeFalsy()
	})

	it("should be able to return true when the character count exceeds the limit", () => {
		const example = "example2"

		const sut = validateMock.maxLength(example, 7)

		expect(sut).toBeTruthy()
	})

	it("should be able to return an error when the character count exceeds the limit and RETURN_ERROR parameter is used", () => {
		try {
			const example = "example2"
			validateMock.maxLength(example, 7, "Example", "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Example pode ter no máximo 7 caracteres!")
		}
	})

	it("should be able to return false when the character count does not meet the minimum limit", () => {
		const example = "example"

		const sut = validateMock.minLength(example, 7)

		expect(sut).toBeFalsy()
	})

	it("should be able to return true when the character count meets the minimum limit", () => {
		const example = "exampl"

		const sut = validateMock.minLength(example, 7)

		expect(sut).toBeTruthy()
	})

	it("should be able to return an error when the character count does not meet the minimum limit and RETURN_ERROR parameter is used", () => {
		try {
			const example = "exampl"
			validateMock.minLength(example, 7, "Example", "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Example deve ter no mínimo 7 caracteres!")
		}
	})

	it("should be able to return true when the value has more than two words", () => {
		const example = "Example Example"

		const sut = validateMock.requiredMoreThanOneWord(example)

		expect(sut).toBeTruthy()
	})

	it("should be able to return false when the value does not have more than two words", () => {
		const example = "Example"

		const sut = validateMock.requiredMoreThanOneWord(example)

		expect(sut).toBeFalsy()
	})

	it("should be able to return an error when the value does not have more than two words and RETURN_ERROR parameter is used", () => {
		try {
			const example = "Example"
			validateMock.requiredMoreThanOneWord(example, "Example", "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Example é obrigatório!")
		}
	})

	it("should be able to return true when the email is valid", () => {
		const example = "example@example.com"

		const sut = validateMock.emailFormat(example)

		expect(sut).toBeTruthy()
	})

	it("should be able to return false when the email is invalid", () => {
		const example = "example@example"

		const sut = validateMock.emailFormat(example)

		expect(sut).toBeFalsy()
	})

	it("should be able to return an error when the email is invalid and RETURN_ERROR parameter is used", () => {
		try {
			const example = "example@example"
			validateMock.emailFormat(example, "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Formato do e-mail é inválido!")
		}
	})

	it("should be able to return true when the value is a valid price format", () => {
		const example = 1000.20

		const sut = validateMock.price(example)

		expect(sut).toBeTruthy()
	})

	it("should be able to return false when the value is not in a valid price format", () => {
		const example: any = "1000,00"

		const sut = validateMock.price(example)

		expect(sut).toBeFalsy()
	})

	it("should be able to return an error when the value is not in a valid price format and RETURN_ERROR parameter is used", () => {
		try {
			const example = 1.323
			validateMock.price(example, "Example", "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Example deve possuir no máximo duas casas decimais!")
		}
	})

	it("should be able to return true when value is in the range of 0 to 100", () => {
		const value = 86

		const sut = validateMock.percent(value)

		expect(sut).toBeTruthy()
	})

	it("should be able to return false when value is not in the range of 0 to 100", () => {
		const value = 101

		const sut = validateMock.percent(value)

		expect(sut).toBeFalsy()
	})

	it("should be able to return an error when value is not in the range of 0 to 100 and RETURN_ERROR parameter is used", () => {
		try {
			const value = -1
			validateMock.percent(value, "Example", "RETURN_ERROR")
		} catch (error: any) {
			
			const sut = error

			expect(sut.message).toEqual("Example deve estar entre 0 a 100%!")
		}
	})
})