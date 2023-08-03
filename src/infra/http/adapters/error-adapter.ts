import { Request, Response, ErrorRequestHandler } from "../config"

interface ErrorRequest {
  handle(request: Request, response: Response, error: ErrorRequestHandler, ): Promise<any>;
}

export const httpErrorAdapter = (errorRequestHandler: ErrorRequest) => {
	return async (error: ErrorRequestHandler, request: Request, response: Response) => {
		return await errorRequestHandler.handle(request, response, error)
	}
}