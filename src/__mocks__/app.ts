import express from "express"
import "express-async-errors"
import corsMock from "../libs/__mocks__/cors"
import routerMock from "../infra/routes/__mocks__"
import { appMiddleware } from "../application/middlewares"
import { dotenv } from "../libs/dotenv"
dotenv.config({ path: ".env.test" })
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "../swagger/bundled-swagger.json"

const app = express()

app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(corsMock)
app.use(routerMock)
app.use(appMiddleware)

export { app }