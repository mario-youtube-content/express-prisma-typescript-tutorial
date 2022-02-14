import { RequestHandler } from "express";

abstract class Controller {
	protected name: string;

	constructor(name: string) {
		this.name = name;
	}

	public abstract getAll: RequestHandler;
	public abstract getOne: RequestHandler;
	public abstract create: RequestHandler;
	public abstract update: RequestHandler;
	public abstract delete: RequestHandler;
}

export default Controller 