import { Request, Response } from "../config"

export interface Controller {
  handle(request: Request, response: Response): Promise<any>
}

export const httpControllerAdapter = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    return await controller.handle(request, response)
  }
}
