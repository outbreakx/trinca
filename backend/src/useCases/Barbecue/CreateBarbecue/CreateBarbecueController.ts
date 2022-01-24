import { Request, Response } from "express";
import { CreateBarbecueUseCase } from "./CreateBarbecueUseCase";


export class CreateBarbecueController {
	constructor(private createBarbecueUseCase: CreateBarbecueUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const {
			name,
			description,
			observation,
			date,
			user
		} = request.body;

		try {
			const data = await this.createBarbecueUseCase.execute({
				name,
				description,
				observation,
				date,
				user
			});

			return response.status(201).json({
				data: data
			});
		}
		catch (err) {
			return response.status(400).json({
				error: {
					code: 400,
					message: err.message || "Unknown error."
				}
			})
		}
	}
}