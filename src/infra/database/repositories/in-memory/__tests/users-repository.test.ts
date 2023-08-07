import { crypt } from "../../../../../application/helpers"
import { IInputCreateDTO, IInputFindDTO } from "../../../../../application/interfaces/dtos/repositories/users"
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

	it("should be able to find user", async () => {
		const input: IInputFindDTO = {
			userId: "eeafe0d2-cc98-42f9-9062-ff9ec0375356",
			fullName: "Full Name",
			age: 18,
			username: "username",
			password: "12345678",
			profilePictureUrl: "http://exemplo.com/profile.png"
		}

		const sut = await usersRepository.find(input)

		expect(sut).toEqual([input])
	})

	it("should be able to find user", async () => {
		const input: IInputFindDTO = {
			userId: "eeafe0d2-cc98-42f9-9062-ff9ec0375355"
		}

		const sut = await usersRepository.find(input)

		expect(sut).toEqual([])
	})
})