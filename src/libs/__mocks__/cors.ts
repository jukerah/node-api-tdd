import Cors from "cors"

const options: Cors.CorsOptions = {
  origin: true,
  optionsSuccessStatus: 200
}

export const corsMock = Cors(options)

export default corsMock
