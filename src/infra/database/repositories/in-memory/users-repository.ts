import { type IUser, inMemoryDatabase } from "../../in-memory-database"
import { type IUsersRepository } from "../../../../application/interfaces/repositories"
import {
  type IInputCreateUserRepositoryDTO,
  type IOutputCreateUserRepositoryDTO,
  type IInputFindUserRepositoryDTO,
  type IOutputFindUserRepositoryDTO
} from "../../../../application/interfaces/dtos/repositories/users"

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
    ) as IUser
    return output ? [output] : []
  }
}
