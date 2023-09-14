import { type Request, type Response } from "@/infra/http/config"
import { type IOutputErrorDTO } from "@/application/interfaces/errors/error-dto"

export interface IDownloadPdfController {
  handle: (
    request: IRequestDownloadPdfControllerDTO,
    response: IResponseDownloadPdfControllerDTO
  ) => IResponseDownloadPdfControllerDTO
}

export type IRequestDownloadPdfControllerDTO = Request

export interface IOutputDownloadPdfOutputDTO {
  message: string
}

export type IResponseDownloadPdfControllerDTO =
  Response<IOutputDownloadPdfOutputDTO | IOutputErrorDTO>
