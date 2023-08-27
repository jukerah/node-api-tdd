import { type User } from "@/application/interfaces/entities"

export interface IUsersRepository {
  create: (
    inputDTO: IInputCreateUserRepositoryDTO
  ) => Promise<IOutputCreateUserRepositoryDTO>
  find: (
    inputDTO: IInputFindUserRepositoryDTO
  ) => Promise<IOutputFindUserRepositoryDTO>
}

export interface IInputCreateUserRepositoryDTO {
  userId: string
  fullName: string
  age: number
  username: string
  password: string
  profilePictureUrl: string
}

export interface IOutputCreateUserRepositoryDTO {
  userId: string
  fullName: string
  age: number
  username: string
  password: string
  profilePictureUrl: string
}

export interface IInputFindUserRepositoryDTO {
  userId?: string
  fullName?: string
  age?: number
  username?: string
  password?: string
  profilePictureUrl?: string
}

export type IOutputFindUserRepositoryDTO = User[]
