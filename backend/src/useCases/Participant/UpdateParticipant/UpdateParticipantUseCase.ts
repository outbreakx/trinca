import { IParticipantRepository } from "@repositories/IParticipantRepository";

import { UpdateParticipantRequestDTO } from "./UpdateParticipantDTO";

export class UpdateParticipantUseCase {
	constructor(private participantRepository: IParticipantRepository) { }

	async execute(data: UpdateParticipantRequestDTO) {
		return this.participantRepository.update(data);
	}
}