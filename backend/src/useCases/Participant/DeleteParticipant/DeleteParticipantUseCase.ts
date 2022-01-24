import { IParticipantRepository } from "@repositories/IParticipantRepository";

import { DeleteParticipantRequestDTO } from "./DeleteParticipantDTO";

export class DeleteParticipantUseCase {
	constructor(private participantRepository: IParticipantRepository) { }

	async execute(data: DeleteParticipantRequestDTO) {
		return this.participantRepository.delete(data);
	}
}