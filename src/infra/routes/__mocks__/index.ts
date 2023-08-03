import { Router } from "../../http/config"
import { createProductControllerFactoryMock } from "../../../application/factories/__mocks__/controllers"

const routerMock = Router()

routerMock.post("/api/v1/product/create", createProductControllerFactoryMock())

export default routerMock