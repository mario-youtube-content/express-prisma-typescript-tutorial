"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_routes_1 = __importDefault(require("./routes/book.routes"));
const publisher_routes_1 = __importDefault(require("./routes/publisher.routes"));
const main = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use('/api/book', book_routes_1.default);
    app.use('/api/publisher', publisher_routes_1.default);
    app.listen("3000", () => {
        console.log("server started on port 3000");
    });
};
main();
