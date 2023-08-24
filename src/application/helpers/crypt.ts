import bcrypt from "../../libs/bcrypt"
import crypto from "../../libs/crypto"
import jwt from "../../libs/jsonwebtoken"
import customError from "../../utils/errors/custom-error"
import { Request } from "../../infra/http/config"

interface PayLoad {
  sub: string
}

interface ICrypt {
  randomUUID: () => string
  createHash: (data: string, rounds: number) => Promise<string>
  compareHash: (data: string, encrypted: string) => Promise<boolean>
  token: (personId: string) => string
  decryptToken: (request: Request) => void | string
}

export const crypt: ICrypt = {
  randomUUID: (): string => {
    return crypto.randomUUID()
  },
  createHash: (data: string, rounds: number): Promise<string> => {
    return bcrypt.hash(data, rounds)
  },
  compareHash: (data: string, encrypted: string): Promise<boolean> => {
    return bcrypt.compare(data, encrypted)
  },
  token: (userId: string): string => {
    const key = process.env.JWT_SECRET as string
    const token = jwt.sign({ userId }, key, {
      subject: userId,
      expiresIn: "1d"
    })
    return token
  },
  decryptToken: (request: Request): void | string => {
    const authToken = request.headers.authorization as string

    if (!authToken) customError("Desculpa, mas você não está autenticado!")

    const [, token] = authToken.split(" ")

    try {
      const { sub } = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as PayLoad

      const userId = (request.userId = sub)

      return userId
    } catch (err) {
      customError("Desculpa, mas você não está autenticado!")
    }
  }
}
