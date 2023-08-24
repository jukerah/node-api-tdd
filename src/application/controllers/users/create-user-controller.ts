import { CreateUserUseCase } from "../../use-cases"
import { CreateUserDTO } from "../../dtos/controllers"
import {
  ICreateUserController,
  IRequestCreateUserControllerDTO,
  IResponseCreateUserControllerDTO
} from "../../interfaces/controllers"

export class CreateUserController implements ICreateUserController {
  constructor(
    private createUserDTO: CreateUserDTO,
    private createUserUseCase: CreateUserUseCase
  ) {}

  async handle(
    request: IRequestCreateUserControllerDTO,
    response: IResponseCreateUserControllerDTO
  ) {
    try {
      const input = this.createUserDTO.input(request)
      const createdUser = await this.createUserUseCase.execute(input)
      const output = this.createUserDTO.output(createdUser)
      return response.status(output.code).json(output)
    } catch (error: any) {
      return response.status(400).json({
        code: 400,
        message: {
          errorCode: "PARAMS_ERROR",
          error: error.message
        }
      })
    }
  }
}
