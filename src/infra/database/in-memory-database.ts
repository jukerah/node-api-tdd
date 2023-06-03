import { ProductEntity } from "../../entities/product-entity"

interface InMemoryDatabase {
  products: ProductEntity[]
}

const inMemoryDatabase: InMemoryDatabase = {
  products: []
}

export default inMemoryDatabase