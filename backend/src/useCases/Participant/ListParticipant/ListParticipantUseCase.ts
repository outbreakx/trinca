import { IParticipantRepository } from "@repositories/IParticipantRepository";

import { ListParticipantDTO } from "./ListParticipantDTO";

export class ListParticipantUseCase {
	constructor(private participantRepository: IParticipantRepository) { }

	async execute(data: ListParticipantDTO) {
		return this.participantRepository.list({
			barbecue: data.barbecueId
		});
	}
}