import { crypt } from "../../../../../application/helpers"
import { IInputCreateDTO } from "../../../../../application/interfaces/dtos/repositories/users"
import { IUsersRepository } from "../../../../../application/interfaces/repositories"
import { InMemoryUsersRepository } from "../users-repository"

describe("In memory users repository", () => {
	let usersRepository: IUsersRepository

	beforeAll(() => {
		usersRepository = new InMemoryUsersRepository()
	})

	it("should be able to create user", async () => {
		const input: IInputCreateDTO = {
			userId: crypt.randomUUID(),
			fullName: "Full Name",
			age: 18,
			username: "username",
			password: "12345678",
			profilePictureUrl: "http://exemplo.com/profile.png"
		}

		const sut = await usersRepository.create(input)
   
		expect(sut).toEqual(input)
	})
})