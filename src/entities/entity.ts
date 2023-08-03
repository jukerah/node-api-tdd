import { randomUUID } from "../application/helpers/random-uuid"

export abstract class Entity<T> {
	protected _id: string
	public params: T

	constructor(params: T, id?: string) {
		this._id = id ?? randomUUID()
		this.params = params
	}
}