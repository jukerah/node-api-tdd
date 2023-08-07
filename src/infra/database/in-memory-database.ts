export interface IUser {
  userId: string
  fullName: string
  age: number
  username: string
  password: string
	profilePictureUrl: string
}

interface InMemoryDatabase {
  users: IUser[]
}

export const inMemoryDatabase: InMemoryDatabase = {
	users: [{
		userId: "eeafe0d2-cc98-42f9-9062-ff9ec0375356",
		fullName: "Full Name",
		age: 18,
		username: "username",
		password: "12345678",
		profilePictureUrl: "http://exemplo.com/profile.png"
	}]
}