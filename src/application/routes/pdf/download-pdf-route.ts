import { router } from "@/application/routes"
import { downloadPdfController } from "@/application/factories/controllers"

router.post("/api/v1/pdf/download", downloadPdfController())
