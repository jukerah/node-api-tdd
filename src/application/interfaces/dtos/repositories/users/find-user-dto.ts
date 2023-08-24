import { IUser } from "../../../../../infra/database/in-memory-database"

export interface IInputFindUserRepositoryDTO {
  userId?: string
  fullName?: string
  age?: number
  username?: string
  password?: string
  profilePictureUrl?: string
}

export type IOutputFindUserRepositoryDTO = IUser[]
