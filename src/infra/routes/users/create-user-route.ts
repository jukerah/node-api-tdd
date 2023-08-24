import router from ".."
import { createUserControllerFactory } from "../../../application/factories/controllers"

router.post("/api/v1/user/create", createUserControllerFactory())
