import {
  type Request,
  type Response,
  type NextFunction
} from "@/infra/http/config"
import { type IUsersRepository } from "@/application/interfaces/repositories"
import { crypt } from "@/application/helpers"
import { badRequest } from "@/infra/http/adapters/http-response"

export class IsAuthenticatedMiddleware {
  constructor (private readonly usersRepository: IUsersRepository) {}

  async handle (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      const userId = crypt.decryptToken(request) as string
      if (!userId) {
        return response.status(400).json(badRequest("Token inválido!"))
      }

      const user = await this.usersRepository.find({ userId })
      if (user.length === 0) {
        return response.status(400).json(badRequest("Usuário inválido!"))
      }

      request.userId = user[0].userId

      next()
    } catch (error: any) {
      return response.status(400).json(badRequest(error.message))
    }
  }
}
