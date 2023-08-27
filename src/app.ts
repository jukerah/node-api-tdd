import express from "express"
import "express-async-errors"
import cors from "@/libs/cors"
import rateLimit from "@/libs/express-rate-limit"
import { router } from "@/application/routes"
import "@/application/routes/all-routes"
import { appMiddleware } from "@/application/middlewares"
import "dotenv/config"
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "@/docs/bundled-swagger.json"

const app = express()

app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(cors)
app.use(rateLimit)
app.use(router)
app.use(appMiddleware)

export { app }
