import { Request, Response } from "express";
import { UpdateParticipantUseCase } from "./UpdateParticipantUseCase";


export class UpdateParticipantController {
	constructor(private updateParticipantUseCase: UpdateParticipantUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const {
			confirmed
		} = request.body;
		const { id } = request.params;
		try {
			const data = await this.updateParticipantUseCase.execute({
				id,
				confirmed
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