import { crypt } from "../application/helpers/crypt"

export abstract class Entity<T> {
	protected _id: string
	public params: T

	constructor(params: T, id?: string) {
		this._id = id ?? crypt.randomUUID()
		this.params = params
	}
}