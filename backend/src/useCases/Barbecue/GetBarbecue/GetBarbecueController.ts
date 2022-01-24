import { Request, Response } from "express";
import { GetBarbecueUseCase } from "./GetBarbecueUseCase";


export class GetBarbecueController {
	constructor(private getBarbecueUseCase: GetBarbecueUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const {
			id
		} = request.params;

		try {
			const data = await this.getBarbecueUseCase.execute({
				id
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