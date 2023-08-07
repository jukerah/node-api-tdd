import {
	IInputCreateDTO,
	IOutputCreateDTO,
	IInputFindDTO,
	IOutputFindDTO 
} from "../dtos/repositories/users"

export interface IUsersRepository {
  create(inputDTO: IInputCreateDTO): Promise<IOutputCreateDTO>
  find(inputDTO: IInputFindDTO): Promise<IOutputFindDTO>
}