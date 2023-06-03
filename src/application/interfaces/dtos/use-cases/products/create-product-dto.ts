import { ProductEntity } from "../../../../../entities/product-entity"
import { IInputCreateDTO } from "../../repositories/products/create-product-dto"

interface IOutputCreateDTO {
  result: ProductEntity
  message: string
}

export { IInputCreateDTO, IOutputCreateDTO }