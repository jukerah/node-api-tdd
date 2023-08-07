import { IInputCreateDTO } from "../../../../interfaces/dtos/use-cases/users"
import { IRequestCreateDTO } from "../../../../interfaces/dtos/controllers/users"
import { CreateUserDTO } from "../create-user-dto"

describe("Create user dto", () => {
	let createUserDTO: CreateUserDTO

	beforeAll(() => {
		createUserDTO = new CreateUserDTO()
	})

	it("should be able to input create user", async () => {
		const input = {
			body: {
				fullName: "Full Name",
				age: 18,
				username: "username",
				password: "12345678",
				profilePictureUrl: "http://exemplo.com/profile.png"
			}
		} as IRequestCreateDTO

		const sut = createUserDTO.execute(input) as IInputCreateDTO
    
		expect(sut.fullName).toEqual(input.body.fullName)
		expect(sut.age).toEqual(input.body.age)
		expect(sut.username).toEqual(input.body.username)
		expect(sut.password).toEqual(input.body.password)
		expect(sut.profilePictureUrl).toEqual(input.body.profilePictureUrl)
	})
})