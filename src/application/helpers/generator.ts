import crypto from "../../libs/crypto"
import { IGenerator } from "../interfaces/helpers/generator"

export class Generator implements IGenerator {
	randomUUID(): string { 
		return crypto.randomUUID()
	}
}