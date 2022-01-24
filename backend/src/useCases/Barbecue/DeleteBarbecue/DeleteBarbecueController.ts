import { Request, Response } from "express";
import { DeleteBarbecueUseCase } from "./DeleteBarbecueUseCase";


export class DeleteBarbecueController {
	constructor(private deleteBarbecueUseCase: DeleteBarbecueUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const {
			id
		} = request.params;

		try {
			const data = await this.deleteBarbecueUseCase.execute({
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