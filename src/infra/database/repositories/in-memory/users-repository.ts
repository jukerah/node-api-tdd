import { IUsersRepository } from "../../../../application/interfaces/repositories"
import { IInputCreateDTO, IOutputCreateDTO } from "../../../../application/interfaces/dtos/repositories/users"
import { inMemoryDatabase } from "../../in-memory-database"

export class InMemoryUsersRepository implements IUsersRepository {
	async create(input: IInputCreateDTO): Promise<IOutputCreateDTO> {
		inMemoryDatabase.users.push(input)
		return input
	}
}