/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction
} from "../../infra/http/config"

export const appMiddleware = (
  error: ErrorRequestHandler,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof Error) {
    return response.status(400).json({
      message: error.message
    })
  }
  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
}
