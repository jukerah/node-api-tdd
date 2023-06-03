import { IInputCreateDTO, IOutputCreateDTO } from "../../../../interfaces/dtos/use-cases/products/create-product-dto"
import { IRequestCreateDTO } from "../../../../interfaces/dtos/controllers/products/create-product-dto"
import { CreateProductDTO } from "../create-product-dto"

describe("Create product dto", () => {
	let createProductDTO: CreateProductDTO

	beforeAll(() => {
		createProductDTO = new CreateProductDTO()
	})

	it("should be able to input create product", async () => {
		const input = {
      body: {
        name: "name",
        description: "description",
        price: 11,
        amount: 5
      }
    } as IRequestCreateDTO

		const sut = createProductDTO.input(input) as IInputCreateDTO
    
		expect(sut.name).toEqual(input.body.name)
    expect(sut.description).toEqual(input.body.description)
    expect(sut.price).toEqual(input.body.price)
    expect(sut.amount).toEqual(input.body.amount)
	})

  it("should be able to return error when name is invalid", async () => {
		try {
      const input = {
        body: {
          description: "description",
          price: 11,
          amount: 5
        }
      } as IRequestCreateDTO
      createProductDTO.input(input) as IInputCreateDTO
    } catch (error: any) {
      
      const sut = error
      
      expect(sut.message).toEqual("Nome do produto é obrigatório!")
    }
	})

  it("should be able to return error when description is invalid", async () => {
		try {
      const input = {
        body: {
          name: "name",
          price: 11,
          amount: 5
        }
      } as IRequestCreateDTO
      createProductDTO.input(input) as IInputCreateDTO
    } catch (error: any) {
      
      const sut = error
      
      expect(sut.message).toEqual("Descrição do produto é obrigatório!")
    }
	})

  it("should be able to return error when price is invalid", async () => {
		try {
      const input = {
        body: {
          name: "name",
          description: "description",
          amount: 5
        }
      } as IRequestCreateDTO
      createProductDTO.input(input) as IInputCreateDTO
    } catch (error: any) {
      
      const sut = error
      
      expect(sut.message).toEqual("Preço do produto é obrigatório!")
    }
	})

  it("should be able to return error when amount is invalid", async () => {
		try {
      const input = {
        body: {
          name: "name",
          description: "description",
          price: 11
        }
      } as IRequestCreateDTO
      createProductDTO.input(input) as IInputCreateDTO
    } catch (error: any) {
      
      const sut = error
      
      expect(sut.message).toEqual("Quantidade do produto é obrigatório!")
    }
	})

  it("should be able to output create product", async () => {
		const output: IOutputCreateDTO = {
      result: {
        productId: '1380e2fb-7f83-40d4-a4ee-9f7680ce2c7b',
        name: 'name',
        description: 'description',
        price: 11,
        amount: 5
      },
      message: "Produto cadastrado com sucesso!"
    }

		const sut = createProductDTO.output(output)
    
		expect(sut).toEqual(output.message)
	})
})