import { routerMock } from "@/application/routes/__mocks__"
import { downloadPdfControllerMock } from "@/application/factories/__mocks__/controllers"

routerMock.post("/api/v1/pdf/download", downloadPdfControllerMock())
