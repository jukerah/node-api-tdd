import { IUsersRepository } from "../../../../application/interfaces/repositories"
import { IInputCreateDTO, IInputFindDTO } from "../../../../application/interfaces/dtos/repositories/users"
import prisma from "../../prisma"

export class PrismaUsersRepository implements IUsersRepository {
	async create(input: IInputCreateDTO) {
		const output = await prisma.users.create({
			data: {
				userId: input.userId,
				fullName: input.fullName,
				age: input.age,
				username: input.username,
				password: input.password,
				profilePictureUrl: input.profilePictureUrl
			}
		})
		return output
	}

	async find(input: IInputFindDTO) {
		const where: any = {}

		for (const key of Object.keys(input) as (keyof IInputFindDTO)[]) {
			if (input[key] !== undefined) {
				where[key] = input[key]
			}
		}

		const output = await prisma.users.findFirst({ where: where as IInputFindDTO })
		return output ? [output] : []
	}
}