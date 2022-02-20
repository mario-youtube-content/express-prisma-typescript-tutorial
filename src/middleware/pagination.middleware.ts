import { Middleware } from "../types/global";

export const paginationMiddleware: Middleware = (req, _, next) => {
	const page = req.query.page ? Number(req.query.page) : 1;
	const itemsPerPage = req.query.itemsPerPage ? Number(req.query.itemsPerPage) : 10;
	req.paginationQuery = {
		take: itemsPerPage,
		skip: (page - 1) * itemsPerPage,
	}
	req.paginationDetail = {
		page, itemsPerPage
	}
	next()
}