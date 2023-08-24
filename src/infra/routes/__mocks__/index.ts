import { Router } from "../../http/config"
import { createUserControllerFactoryMock } from "../../../application/factories/__mocks__/controllers"

const routerMock = Router()

routerMock.post("/api/v1/user/create", createUserControllerFactoryMock())

export default routerMock
