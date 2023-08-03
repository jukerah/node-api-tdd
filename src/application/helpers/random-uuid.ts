import crypto from "../../libs/crypto"

export const randomUUID = (): string => { 
	return crypto.randomUUID()
}