import { Request, Response, NextFunction } from "../../infra/http/config"
import { crypt } from "../helpers"

export class IsAuthenticatedMiddleware {
	async handle(request: Request, response: Response, next: NextFunction) {
		try {
			const userId = crypt.decryptToken(request) as string

			if(!userId) return response.status(400).json("Token inválido!")

			request.userId = userId
      
			return next()
		} catch (error: any) {
			return response.status(400).json(error.message)
		}
	}
}