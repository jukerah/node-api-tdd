import {
  type IInputCreateUserRepositoryDTO,
  type IOutputCreateUserRepositoryDTO,
  type IInputFindUserRepositoryDTO,
  type IOutputFindUserRepositoryDTO
} from "@/application/interfaces/dtos/repositories/users"

export interface IUsersRepository {
  create: (
    inputDTO: IInputCreateUserRepositoryDTO
  ) => Promise<IOutputCreateUserRepositoryDTO>
  find: (
    inputDTO: IInputFindUserRepositoryDTO
  ) => Promise<IOutputFindUserRepositoryDTO>
}
