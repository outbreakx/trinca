import { Request, Response } from "express";
import { ListBarbecueUseCase } from "./ListBarbecueUseCase";
import { ListBarbecueRequestDTO } from "./ListBarbecueDTO";

export class ListBarbecueController {
	constructor(private listBarbecueUseCase: ListBarbecueUseCase) { }

	async handle(request: Request<{}, {}, {}, ListBarbecueRequestDTO>, response: Response): Promise<Response> {
		const {
			name,
			description,
			observation,
			user
		} = request.query;

		try {
			const data = await this.listBarbecueUseCase.execute({
				name,
				description,
				observation,
				user
			});

			return response.status(200).json({
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