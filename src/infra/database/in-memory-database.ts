import { type User } from "@/application/interfaces/entities"

interface InMemoryDatabase {
  users: User[]
}

export const inMemoryDatabase: InMemoryDatabase = {
  users: [
    {
      userId: "eeafe0d2-cc98-42f9-9062-ff9ec0375356",
      fullName: "Full Name",
      age: 18,
      username: "username",
      password: "12345678",
      profilePictureUrl: "http://exemplo.com/profile.png"
    }
  ]
}
