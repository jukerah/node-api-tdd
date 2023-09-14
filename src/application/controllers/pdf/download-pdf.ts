import {
  // type IDownloadPdfController,
  type IRequestDownloadPdfControllerDTO,
  type IResponseDownloadPdfControllerDTO
} from "@/application/interfaces/controllers"
import { file } from "@/application/helpers"
import { unavailable } from "@/infra/http/adapters/http-response"
import { templatePdf } from "@/application/templates/pdf/template-pdf"

export class DownloadPdfController {
  async handle (
    _request: IRequestDownloadPdfControllerDTO,
    response: IResponseDownloadPdfControllerDTO
  ): Promise<void> {
    try {
      const fileName = "fileName"
      const path = "src/tmp/pdf"
      const pdf = await file.createPdf(fileName, path, templatePdf())
      const filePath = pdf.filePath as string

      response.download(filePath)
    } catch (error: any) {
      response.status(400).json(unavailable(error.message))
    }
  }
}
