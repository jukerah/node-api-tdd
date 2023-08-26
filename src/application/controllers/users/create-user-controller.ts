import { type CreateUserUseCase } from "@/application/use-cases"
import { type CreateUserDTO } from "@/application/dtos/controllers"
import {
  type ICreateUserController,
  type IRequestCreateUserControllerDTO,
  type IResponseCreateUserControllerDTO
} from "@/application/interfaces/controllers"

export class CreateUserController implements ICreateUserController {
  constructor (
    private readonly createUserDTO: CreateUserDTO,
    private readonly createUserUseCase: CreateUserUseCase
  ) {}

  async handle (
    request: IRequestCreateUserControllerDTO,
    response: IResponseCreateUserControllerDTO
  ): Promise<IResponseCreateUserControllerDTO> {
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
