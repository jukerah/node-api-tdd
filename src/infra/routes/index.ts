import { Router } from "../http/config"
import { createProductControllerFactory } from "../../application/factories/controllers"

const router = Router()

router.post("/api/v1/product/create", createProductControllerFactory())

export default router