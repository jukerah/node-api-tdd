import { httpMiddlewareAdapter } from "../../../../infra/http/adapters"
import { IsAuthenticatedMiddleware } from "../../../middlewares/is-authenticated-middleware"

export const isAuthenticatedMiddlewareFactoryMock = () => {
	const isAuthenticatedMiddleware = new IsAuthenticatedMiddleware()
	return httpMiddlewareAdapter(isAuthenticatedMiddleware)
}