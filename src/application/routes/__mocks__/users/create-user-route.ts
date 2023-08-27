import { routerMock } from "@/application/routes/__mocks__"
import { createUserControllerMock } from "@/application/factories/__mocks__/controllers"

routerMock.post("/api/v1/user/create", createUserControllerMock())
