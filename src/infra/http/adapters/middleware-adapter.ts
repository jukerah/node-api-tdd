import { type Request, type Response, type NextFunction } from "../config"

interface Middleware {
  handle: (request: Request, response: Response, next: NextFunction) => any
}

export const httpMiddlewareAdapter = (middleware: Middleware) => {
  return (request: Request, response: Response, next: NextFunction) => {
    return middleware.handle(request, response, next)
  }
}
