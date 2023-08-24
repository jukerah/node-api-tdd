import { InMemoryUsersRepository } from "../../../../infra/database/repositories/in-memory"
import { httpMiddlewareAdapter } from "../../../../infra/http/adapters"
import { IsAuthenticatedMiddleware } from "../../../middlewares/is-authenticated-middleware"

export const isAuthenticatedMiddlewareFactoryMock = () => {
  const isAuthenticatedMiddleware = new IsAuthenticatedMiddleware(
    new InMemoryUsersRepository()
  )
  return httpMiddlewareAdapter(isAuthenticatedMiddleware)
}
