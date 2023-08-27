import {
  type Request,
  type Response,
  type ErrorRequestHandler,
  type NextFunction
} from "@/infra/http/config"

export const appMiddleware = (
  error: ErrorRequestHandler,
  _request: Request,
  response: Response,
  _next: NextFunction
): Response<any, Record<string, any>> => {
  if (error instanceof Error) {
    return response.status(400).json({
      message: error.message
    })
  }
  return response.status(500).json({
    code: 500,
    message: {
      errorCode: "SERVICE_UNAVAILABLE",
      error: "Serviço não disponível"
    }
  })
}
