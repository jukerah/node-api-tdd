import { type User } from "@/application/interfaces/entities"
import { inMemoryDatabase } from "@/infra/database/in-memory-database"
import {
  type IUsersRepository,
  type IInputCreateUserRepositoryDTO,
  type IOutputCreateUserRepositoryDTO,
  type IInputFindUserRepositoryDTO,
  type IOutputFindUserRepositoryDTO
} from "@/application/interfaces/repositories"

export class InMemoryUsersRepository implements IUsersRepository {
  async create (input: IInputCreateUserRepositoryDTO): Promise<IOutputCreateUserRepositoryDTO> {
    inMemoryDatabase.users.push(input)
    return input
  }

  async find (input: IInputFindUserRepositoryDTO): Promise<IOutputFindUserRepositoryDTO> {
    const output = inMemoryDatabase.users.find(
      (user) =>
        (!input.userId || user.userId === input.userId) &&
        (!input.fullName || user.fullName === input.fullName) &&
        (!input.age || user.age === input.age) &&
        (!input.username || user.username === input.username) &&
        (!input.password || user.password === input.password) &&
        (!input.profilePictureUrl ||
          user.profilePictureUrl === input.profilePictureUrl)
    ) as User
    return output ? [output] : []
  }
}
