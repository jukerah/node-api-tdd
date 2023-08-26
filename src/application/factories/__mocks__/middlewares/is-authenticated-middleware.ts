import { InMemoryUsersRepository } from "@/infra/database/repositories/in-memory"
import { httpMiddlewareAdapter } from "@/infra/http/adapters"
import { IsAuthenticatedMiddleware } from "@/application/middlewares/is-authenticated-middleware"

export const isAuthenticatedMiddlewareMock = (): any => {
  const isAuthenticatedMiddleware = new IsAuthenticatedMiddleware(
    new InMemoryUsersRepository()
  )
  return httpMiddlewareAdapter(isAuthenticatedMiddleware)
}
