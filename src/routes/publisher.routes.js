"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publisher_controller_1 = __importDefault(require("../controller/publisher.controller"));
const pagination_middleware_1 = require("../middleware/pagination.middleware");
const publisherRoutes = (0, express_1.Router)();
const controller = new publisher_controller_1.default();
publisherRoutes.get("/", pagination_middleware_1.paginationMiddleware, controller.getAll);
publisherRoutes.post("/", controller.create);
publisherRoutes.get("/:id", controller.getOne);
publisherRoutes.put("/:id", controller.update);
publisherRoutes.delete("/:id", controller.delete);
exports.default = publisherRoutes;
