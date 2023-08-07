import { IInputCreateDTO, IOutputCreateDTO } from "../dtos/repositories/users"

export interface IUsersRepository {
  create(inputDTO: IInputCreateDTO): Promise<IOutputCreateDTO>
}