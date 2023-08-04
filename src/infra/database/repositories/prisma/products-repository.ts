import { IProductsRepository } from "../../../../application/interfaces/repositories"
import { IInputCreateDTO, IOutputCreateDTO } from "../../../../application/interfaces/dtos/repositories/products"
import prisma from "../../prisma"

export class PrismaProductsRepository implements IProductsRepository {
	async create(input: IInputCreateDTO): Promise<IOutputCreateDTO> {
		const output = await prisma.products.create({
			data: {
				productId: input.productId,
				name: input.name,
				description: input.description,
				price: input.price,
				amount: input.amount
			}
		})
		return output
	}
}