import express from "express"
import "express-async-errors"
import corsMock from "../libs/__mocks__/cors"
import routerMock from "../infra/routes/__mocks__"
import dotenv from "dotenv"
import { appMiddleware } from "../application/middlewares"
import "dotenv/config"
dotenv.config({ path: ".env.test" })

const app = express()

app.use(express.json())
app.use(corsMock)
app.use(routerMock)
app.use(appMiddleware)

export { app }