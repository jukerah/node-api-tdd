import { Router } from "../http/config"
import { createUserControllerFactory } from "../../application/factories/controllers"

const router = Router()

router.post("/api/v1/user/create", createUserControllerFactory())

export default router