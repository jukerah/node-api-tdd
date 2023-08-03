import cors from "cors"

const options: cors.CorsOptions = {
	origin: true,
	optionsSuccessStatus: 200
}

const corsMock = cors(options)
export default corsMock