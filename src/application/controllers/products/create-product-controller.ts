import { ICreateProductController } from "../../interfaces/controllers/products/create-product-controller"
import { CreateProductUseCase } from "../../use-cases/products/create-product-use-case"
import { CreateProductDTO } from "../../dtos/controllers/products/create-product-dto"
import { IRequestCreateDTO, IResponseCreateDTO } from "../../interfaces/dtos/controllers/products/create-product-dto"

export class CreateProductController implements ICreateProductController {
  private createProductDTO: CreateProductDTO

  constructor (private createProductUseCase: CreateProductUseCase) {
    this.createProductDTO = new CreateProductDTO()
  }

  async handle(request: IRequestCreateDTO, response: IResponseCreateDTO): Promise<IResponseCreateDTO> {
    try {
      const input = this.createProductDTO.input(request)
      const product = await this.createProductUseCase.execute(input)
      const output = this.createProductDTO.output(product)
      return response.status(201).json(output)
    } catch (error: any) {
      return response.status(400).json(error.message)
    }
  }
}