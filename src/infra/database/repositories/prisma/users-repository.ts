import { IUsersRepository } from "../../../../application/interfaces/repositories"
import { IInputCreateDTO, IOutputCreateDTO } from "../../../../application/interfaces/dtos/repositories/users"
import prisma from "../../prisma"

export class PrismaUsersRepository implements IUsersRepository {
	async create(input: IInputCreateDTO): Promise<IOutputCreateDTO> {
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
}