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
	products: [{
		productId: "eeafe0d2-cc98-42f9-9062-ff9ec0375356",
		name: "Nome do produto",
		description: "Descrição do produto",
		price: 1500,
		amount: 10
	}]
}