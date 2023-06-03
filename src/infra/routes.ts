import { Router } from "./http-config"
import createProductController from "../application/factories/controllers/products/create-product-controller-factory"

const router = Router()

router.post("/create-product", createProductController())

export default router