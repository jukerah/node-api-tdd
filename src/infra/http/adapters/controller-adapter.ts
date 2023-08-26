import { type Request, type Response } from "../config"

interface Controller {
  handle: (request: Request, response: Response) => any
}

export const httpControllerAdapter = (controller: Controller) => {
  return (request: Request, response: Response) => {
    return controller.handle(request, response)
  }
}
