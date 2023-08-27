import "module-alias/register"
import express from "express"
import "express-async-errors"
import corsMock from "@/libs/__mocks__/cors"
import { routerMock } from "@/application/routes/__mocks__"
import "@/application/routes/__mocks__/all-routes"
import { appMiddleware } from "@/application/middlewares"
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "@/docs/bundled-swagger.json"
import dotenv from "@/libs/dotenv"
dotenv.config({ path: ".env.test" })

const app = express()

app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(corsMock)
app.use(routerMock)
app.use(appMiddleware)

export { app }
