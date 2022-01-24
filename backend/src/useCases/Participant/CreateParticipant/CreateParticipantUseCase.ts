import { Participant } from "@entities/Participant";
import { IParticipantRepository } from "@repositories/IParticipantRepository";

import { CreateParticipantRequestDTO } from "./CreateParticipantDTO";

export class CreateParticipantUseCase {
	constructor(private ParticipantRepository: IParticipantRepository) { }

	async execute(data: CreateParticipantRequestDTO) {
		const newParticipant = new Participant(data);
		return this.ParticipantRepository.save(newParticipant);
	}
}