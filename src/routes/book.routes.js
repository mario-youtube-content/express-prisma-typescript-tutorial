"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_controller_1 = __importDefault(require("../controller/book.controller"));
const pagination_middleware_1 = require("../middleware/pagination.middleware");
const bookRoutes = (0, express_1.Router)();
const controller = new book_controller_1.default();
bookRoutes.get("/", pagination_middleware_1.paginationMiddleware, controller.getAll);
bookRoutes.post("/", controller.create);
bookRoutes.get("/:id", controller.getOne);
bookRoutes.put("/:id", controller.update);
bookRoutes.delete("/:id", controller.delete);
exports.default = bookRoutes;
