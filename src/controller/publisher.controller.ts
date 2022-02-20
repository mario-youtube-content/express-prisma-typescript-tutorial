import { RequestHandler } from "express";
import Controller from "../core/controller";
import db from "../core/database";

class PublisherController extends Controller {
	protected model = db.publisher;

	constructor() {
		super('publishers')
	}

	// GET /api/publisher
	getAll: RequestHandler = async (req, res) => {
		try {
			const items = await this.model.findMany({
				...req.paginationQuery,
				include: {
					books: true,
					_count: {
						select: {
							books: true
						}
					}
				}
			});
			const numOfItems = await this.model.count();
			const totalPages = Math.ceil(numOfItems / req.paginationQuery.take)
			res.send({ items, ...req.paginationDetail, totalPages })
		}
		catch (err) {
			res.status(400).send("Error Occured")
		}
	}

	// GET /api/publisher/:id
	getOne: RequestHandler = async (req, res) => {
		const id = String(req.params.id);
		if (!id) {
			return res.status(400).send({
				id: "Id is not defined"
			})
		}
		try {
			const publisher = await this.model.findUnique({
				where: {
					id
				}
			})
			return res.send(publisher)
		}
		catch (err) {
			return res.status(400).send("Error occured")
		}
	}

	// POST /api/publisher
	create: RequestHandler = async (req, res) => {
		const body = req.body;
		try {
			const publisher = await this.model.create({
				data: body
			})
			return res.send(publisher)
		}
		catch (err) {
			return res.status(400).send("Error occured")
		}
	}

	// DELETE /api/publisher/:id
	delete: RequestHandler = async (req, res) => {
		const id = String(req.params.id);
		if (!id) {
			return res.status(400).send({
				id: "Id is not defined"
			})
		}
		try {
			const publisher = await this.model.delete({
				where: {
					id
				}
			})
			return res.send(publisher)
		}
		catch (err) {
			return res.status(400).send("Error occured")
		}
	}

	// UPDATE /api/publisher/:id
	update: RequestHandler = async (req, res) => {
		const id = String(req.params.id);
		if (!id) {
			return res.status(400).send({
				id: "Id is not defined"
			})
		}
		const body = req.body;
		try {
			const publisher = await this.model.update({
				where: {
					id
				},
				data: body
			})
			return res.send(publisher)
		}
		catch (err) {
			return res.status(400).send("Error occured")
		}
	}
}

export default PublisherController