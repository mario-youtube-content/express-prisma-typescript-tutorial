"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("../core/controller"));
const database_1 = __importDefault(require("../core/database"));
class BookController extends controller_1.default {
    constructor() {
        super('books');
        this.model = database_1.default.book;
        // GET /api/book
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield this.model.findMany(Object.assign(Object.assign({}, req.paginationQuery), { include: {
                        publisher: true
                    } }));
                const numOfItems = yield this.model.count();
                const totalPages = Math.ceil(numOfItems / req.paginationDetail.itemsPerPage);
                res.send(Object.assign(Object.assign({ items: books }, req.paginationDetail), { totalPages }));
            }
            catch (err) {
                res.status(400).send("Error Occured");
            }
        });
        // GET /api/book/:id
        this.getOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            if (!id) {
                return res.status(400).send({
                    id: "Id is not defined"
                });
            }
            try {
                const book = yield this.model.findUnique({
                    where: {
                        id
                    }
                });
                return res.send(book);
            }
            catch (err) {
                return res.status(400).send("Error occured");
            }
        });
        // POST /api/book
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            try {
                const book = yield this.model.create({
                    data: body
                });
                return res.send(book);
            }
            catch (err) {
                return res.status(400).send("Error occured");
            }
        });
        // DELETE /api/book/:id
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            if (!id) {
                return res.status(400).send({
                    id: "Id is not defined"
                });
            }
            try {
                const book = yield this.model.delete({
                    where: {
                        id
                    }
                });
                return res.send(book);
            }
            catch (err) {
                return res.status(400).send("Error occured");
            }
        });
        // UPDATE /api/book/:id
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            if (!id) {
                return res.status(400).send({
                    id: "Id is not defined"
                });
            }
            const body = req.body;
            try {
                const book = yield this.model.update({
                    where: {
                        id: Number(req.params.id)
                    },
                    data: body
                });
                return res.send(book);
            }
            catch (err) {
                return res.status(400).send("Error occured");
            }
        });
    }
}
exports.default = BookController;
