import express from "express"
import "express-async-errors"
import cors from "./libs/cors"
import rateLimit from "./libs/express-rate-limit"
import router from "./infra/routes"
import { appMiddleware } from "./application/middlewares"
import "dotenv/config"

const app = express()

app.use(express.json())
app.use(cors)
app.use(rateLimit)
app.use(router)
app.use(appMiddleware)

export { app }