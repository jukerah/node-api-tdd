import { type IUsersRepository } from "../../../../application/interfaces/repositories"
import {
  type IInputCreateUserRepositoryDTO,
  type IOutputCreateUserRepositoryDTO,
  type IInputFindUserRepositoryDTO,
  type IOutputFindUserRepositoryDTO
} from "../../../../application/interfaces/dtos/repositories/users"
import prisma from "../../prisma"

export class PrismaUsersRepository implements IUsersRepository {
  async create (input: IInputCreateUserRepositoryDTO): Promise<IOutputCreateUserRepositoryDTO> {
    const output = await prisma.users.create({
      data: {
        userId: input.userId,
        fullName: input.fullName,
        age: input.age,
        username: input.username,
        password: input.password,
        profilePictureUrl: input.profilePictureUrl
      }
    })
    return output
  }

  async find (input: IInputFindUserRepositoryDTO): Promise<IOutputFindUserRepositoryDTO> {
    const params: any = {}

    for (const key of Object.keys(
      input
    ) as Array<keyof IInputFindUserRepositoryDTO>) {
      if (input[key] !== undefined) {
        params[key] = input[key]
      }
    }

    const output = await prisma.users.findFirst({
      where: params as IInputFindUserRepositoryDTO
    })
    return output ? [output] : []
  }
}
