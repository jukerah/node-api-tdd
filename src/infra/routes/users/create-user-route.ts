import router from "@/infra/routes"
import { createUserController } from "@/application/factories/controllers"

router.post("/api/v1/user/create", createUserController())
