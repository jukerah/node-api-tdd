import express, { NextFunction, Request, Response, Router } from "express"

const app = express()
app.use(express.json())

const router = Router()

router.get("/test", (req: Request, res: Response) => {
	return res.json({ status: "Hello World!" })
})

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) return res.status(400).json({
    error: err.message
  });

  return res.status(500).json({
    status: "error",
    message: "Internal server error."
  });
});

const port = process.env.PORT || 3030

app.listen(port, () => {
	console.log(`Server running on port ${port}.`)
})