import { Request, Response, ErrorRequestHandler } from "../../infra/http-config"

const appMiddleware = (request: Request, response: Response, error: ErrorRequestHandler) => {
	if (error instanceof Error) {
		return response.status(400).json({
			message: error.message,
		})
	}
	return response.status(500).json({
		status: "error",
		message: "Internal server error",
	})
}

export default appMiddleware