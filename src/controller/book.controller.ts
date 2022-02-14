import { RequestHandler } from "express";
import Controller from "../core/controller";
import db from "../core/database";

class BookController extends Controller {
	protected model = db.book;

	constructor() {
		super('books')
	}

	// GET /api/book
	getAll: RequestHandler = async (req, res) => {
		try {
			const books = await this.model.findMany();
			res.send(books)
		}
		catch (err) {
			res.status(400).send("Error Occured")
		}
	}

	// GET /api/book/:id
	getOne: RequestHandler = async (req, res) => {
		const id = Number(req.params.id);
		if (!id) {
			return res.status(400).send({
				id: "Id is not defined"
			})
		}
		try {
			const book = await this.model.findUnique({
				where: {
					id
				}
			})
			return res.send(book)
		}
		catch (err) {
			return res.status(400).send("Error occured")
		}
	}

	// POST /api/book
	create: RequestHandler = async (req, res) => {
		const body = req.body;
		try {
			const book = await this.model.create({
				data: body
			})
			return res.send(book)
		}
		catch (err) {
			return res.status(400).send("Error occured")
		}
	}

	// DELETE /api/book/:id
	delete: RequestHandler = async (req, res) => {
		const id = Number(req.params.id);
		if (!id) {
			return res.status(400).send({
				id: "Id is not defined"
			})
		}
		try {
			const book = await this.model.delete({
				where: {
					id
				}
			})
			return res.send(book)
		}
		catch (err) {
			return res.status(400).send("Error occured")
		}
	}

	// UPDATE /api/book/:id
	update: RequestHandler = async (req, res) => {
		const id = Number(req.params.id);
		if (!id) {
			return res.status(400).send({
				id: "Id is not defined"
			})
		}
		const body = req.body;
		try {
			const book = await this.model.update({
				where: {
					id: Number(req.params.id)
				},
				data: body
			})
			return res.send(book)
		}
		catch (err) {
			return res.status(400).send("Error occured")
		}
	}
}

export default BookController