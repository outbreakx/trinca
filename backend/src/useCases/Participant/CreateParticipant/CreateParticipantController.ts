import { Request, Response } from "express";
import { CreateParticipantUseCase } from "./CreateParticipantUseCase";


export class CreateParticipantController {
	constructor(private createParticipantUseCase: CreateParticipantUseCase) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const {
			name,
			amount,
			confirmed,
			barbecueId,
		} = request.body;

		try {
			const data = await this.createParticipantUseCase.execute({
				name,
				amount,
				confirmed,
				barbecue: barbecueId,
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