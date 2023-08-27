import { router } from "@/application/routes"
import { createUserController } from "@/application/factories/controllers"

router.post("/api/v1/user/create", createUserController())
