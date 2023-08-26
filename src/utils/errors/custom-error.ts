export default function customError (error: string): Error {
  throw new Error(error)
}
