import { httpControllerAdapter } from "@/infra/http/adapters"
import { DownloadPdfController } from "@/application/controllers"

export const downloadPdfControllerMock = (): any => {
  const controller = new DownloadPdfController()
  return httpControllerAdapter(controller)
}
