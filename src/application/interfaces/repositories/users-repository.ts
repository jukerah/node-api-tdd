import {
  IInputCreateUserRepositoryDTO,
  IOutputCreateUserRepositoryDTO,
  IInputFindUserRepositoryDTO,
  IOutputFindUserRepositoryDTO
} from "../dtos/repositories/users"

export interface IUsersRepository {
  create(
    inputDTO: IInputCreateUserRepositoryDTO
  ): Promise<IOutputCreateUserRepositoryDTO>
  find(
    inputDTO: IInputFindUserRepositoryDTO
  ): Promise<IOutputFindUserRepositoryDTO>
}
