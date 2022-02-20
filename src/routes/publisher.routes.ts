import { Router } from "express"
import PublisherController from "../controller/publisher.controller"
import { paginationMiddleware } from "../middleware/pagination.middleware"

const publisherRoutes = Router()
const controller = new PublisherController()

publisherRoutes.get("/", paginationMiddleware, controller.getAll)
publisherRoutes.post("/", controller.create)
publisherRoutes.get("/:id", controller.getOne)
publisherRoutes.put("/:id", controller.update)
publisherRoutes.delete("/:id", controller.delete)

export default publisherRoutes