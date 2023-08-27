import Cors from "cors"

const options: Cors.CorsOptions = {
  origin: true,
  optionsSuccessStatus: 200
}

export const cors = Cors(options)

export default cors
