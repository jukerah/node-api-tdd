type Data = {
  message?: any
  result: any
}

type Response = {
  code?: any
  message?: any
  result?: any
}

export const badRequest = (error: string): any => ({
  code: 400,
  message: {
    errorCode: "PARAMS_ERROR",
    error
  }
})

export const ok = (data: Data): any => {
  const response: Response = {
    code: 200,
    result: data.result
  }
  if (data.message) response.message = data.message
  return response
}

export const created = (data: Data): any => {
  const response: Response = {
    code: 201,
    result: data.result
  }
  if (data.message) response.message = data.message
  return response
}

export const unavailable = (error: string): any => ({
  code: 503,
  message: {
    errorCode: "SERVICE_UNAVAILABLE",
    error
  }
})

export const forbidden = (error: string): any => ({
  code: 403,
  message: {
    errorCode: "FORBIDDEN",
    error
  }
})

export const unauthorized = (error: string): any => ({
  code: 401,
  message: {
    errorCode: "UNAUTHORIZED",
    error
  }
})

export const serverError = (error: string): any => ({
  code: 500,
  message: {
    errorCode: "INTERNAL_ERROR",
    error
  }
})

export const noContent = (data: Data): any => {
  const response: Response = {
    code: 204,
    result: data.result
  }
  if (data.message) response.message = data.message
  return response
}
