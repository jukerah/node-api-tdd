import RateLimit from "express-rate-limit"

const rateLimit = RateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // limite each IP to 100 requests por windowMs
	message: "Você realizou muitas requisições, tente novamente mais tarde!"
})

export default rateLimit
