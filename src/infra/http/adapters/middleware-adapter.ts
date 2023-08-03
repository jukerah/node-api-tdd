import { Request, Response, NextFunction } from "../config"

export interface Middleware {
  handle(request: Request, response: Response, next: NextFunction): Promise<any>;
}

export const httpMiddlewareAdapter = (middleware: Middleware) => {
	return async (request: Request, response: Response, next: NextFunction) => {
		return await middleware.handle(request, response, next)
	}
}
