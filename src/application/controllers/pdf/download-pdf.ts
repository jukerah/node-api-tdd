import {
  type IDownloadPdfController,
  type IRequestDownloadPdfControllerDTO,
  type IResponseDownloadPdfControllerDTO
} from "@/application/interfaces/controllers"
import { file } from "@/application/helpers"
import { unavailable } from "@/infra/http/adapters/http-response"
import { templatePdf } from "@/application/templates/pdf/template-pdf"

export class DownloadPdfController implements IDownloadPdfController {
  async handle (
    _request: IRequestDownloadPdfControllerDTO,
    response: IResponseDownloadPdfControllerDTO
  ): Promise<void> {
    try {
      const fileName = "file-name"
      const bufferPdf = await file.createBufferPdf(templatePdf())
      response
        .setHeader("Content-Type", "application/pdf")
        .setHeader("Content-Disposition", `attachment; filename=${fileName}.pdf`)
        .status(200).send(bufferPdf)
    } catch (error: any) {
      response.status(400).json(unavailable(error.message))
    }
  }
}
