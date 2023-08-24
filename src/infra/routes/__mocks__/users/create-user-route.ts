import routerMock from ".."
import { createUserControllerFactoryMock } from "../../../../application/factories/__mocks__/controllers"

routerMock.post("/api/v1/user/create", createUserControllerFactoryMock())
