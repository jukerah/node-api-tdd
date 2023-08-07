import { Request, Response, NextFunction } from "../../infra/http/config"
import { crypt } from "../helpers"
import { IUsersRepository } from "../interfaces/repositories"

export class IsAuthenticatedMiddleware {
	constructor(private usersRepository: IUsersRepository) {}
	
	async handle(request: Request, response: Response, next: NextFunction) {
		try {
			const userId = crypt.decryptToken(request) as string
			if(!userId) return response.status(400).json("Token inválido!")

			const user = await this.usersRepository.find({ userId })
			if(user.length === 0) return response.status(400).json("Usuário inválido!")

			request.userId = user[0].userId
      
			return next()
		} catch (error: any) {
			return response.status(400).json(error.message)
		}
	}
}