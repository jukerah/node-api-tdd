export interface IInputCreateDTO {
  name: string
  description: string
  price: number
  amount: number
}

export interface IOutputCreateDTO {
  code: number
  result: {
    productId: string
    name: string
    description: string
    price: number
    amount: number
  }
  message: string
}