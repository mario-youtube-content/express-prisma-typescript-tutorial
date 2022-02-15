import { Router } from "express"
import BookController from "../controller/book.controller"
import { paginationMiddleware } from "../middleware/pagination.middleware"

const bookRoutes = Router()
const controller = new BookController()

bookRoutes.get("/", paginationMiddleware, controller.getAll)
bookRoutes.post("/", controller.create)
bookRoutes.get("/:id", controller.getOne)
bookRoutes.put("/:id", controller.update)
bookRoutes.delete("/:id", controller.delete)

export default bookRoutes