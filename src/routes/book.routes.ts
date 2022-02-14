import { Router } from "express"
import BookController from "../controller/book.controller"

const bookRoutes = Router()
const controller = new BookController()

bookRoutes.get("/", controller.getAll)
bookRoutes.post("/", controller.create)
bookRoutes.get("/:id", controller.getOne)
bookRoutes.put("/:id", controller.update)
bookRoutes.delete("/:id", controller.delete)

export default bookRoutes