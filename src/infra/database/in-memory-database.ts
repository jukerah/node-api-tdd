interface Product {
  productId: string
  name: string
  description: string
  price: number
  amount: number
}

interface InMemoryDatabase {
  products: Product[]
}

export const inMemoryDatabase: InMemoryDatabase = {
	products: []
}