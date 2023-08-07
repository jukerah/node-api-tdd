import { PrismaUsersRepository } from "../../../infra/database/repositories/prisma"
import { httpMiddlewareAdapter } from "../../../infra/http/adapters"
import { IsAuthenticatedMiddleware } from "../../middlewares/is-authenticated-middleware"

export const isAuthenticatedMiddlewareFactory = () => {
	const isAuthenticatedMiddleware = new IsAuthenticatedMiddleware(new PrismaUsersRepository())
	return httpMiddlewareAdapter(isAuthenticatedMiddleware)
}