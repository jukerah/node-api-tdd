import {
  type Request,
  type Response,
  type NextFunction
} from "@/infra/http/config"
import { type IUsersRepository } from "@/application/interfaces/repositories"
import { crypt } from "@/application/helpers"

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
        return response.status(400).json("Token inválido!")
      }

      const user = await this.usersRepository.find({ userId })
      if (user.length === 0) {
        return response.status(400).json("Usuário inválido!")
      }

      request.userId = user[0].userId

      next()
    } catch (error: any) {
      return response.status(400).json(error.message)
    }
  }
}
