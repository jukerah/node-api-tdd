import { PrismaUsersRepository } from "@/infra/database/repositories/prisma"
import { httpMiddlewareAdapter } from "@/infra/http/adapters"
import { IsAuthenticatedMiddleware } from "@/application/middlewares/is-authenticated-middleware"

export const isAuthenticatedMiddleware = (): any => {
  const isAuthenticatedMiddleware = new IsAuthenticatedMiddleware(
    new PrismaUsersRepository()
  )
  return httpMiddlewareAdapter(isAuthenticatedMiddleware)
}
