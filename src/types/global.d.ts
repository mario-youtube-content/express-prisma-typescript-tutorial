import { RequestHandler } from "express";

declare global {
	namespace Express {
		interface Request {
			paginationQuery: PaginationQuery
			paginationDetail: PaginationDetail
		}
	}
}

type Middleware = RequestHandler