import express from "express"
import bookRoutes from "./routes/book.routes"
import publisherRoutes from "./routes/publisher.routes"

const main = () => {
	const app = express()

	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))

	app.use('/api/book', bookRoutes)
	app.use('/api/publisher', publisherRoutes)

	app.listen("3000", () => {
		console.log("server started on port 3000")
	})
}

main()