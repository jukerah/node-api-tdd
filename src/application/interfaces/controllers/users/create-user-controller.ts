import {
  IRequestCreateUserControllerDTO,
  IResponseCreateUserControllerDTO
} from "../../dtos/controllers/users"

export interface ICreateUserController {
  handle(
    request: IRequestCreateUserControllerDTO,
    response: IResponseCreateUserControllerDTO
  ): Promise<IResponseCreateUserControllerDTO>
}
