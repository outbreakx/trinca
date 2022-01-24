import { Request, Response } from "express";
import { ListParticipantUseCase } from "./ListParticipantUseCase";
import { ListParticipantDTO } from "./ListParticipantDTO";

export class ListParticipantController {
	constructor(private listParticipantUseCase: ListParticipantUseCase) { }

	async handle(request: Request<{}, {}, {}, ListParticipantDTO>, response: Response): Promise<Response> {
		const {
			barbecueId
		} = request.query;

		try {
			const data = await this.listParticipantUseCase.execute({
				barbecueId
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