import { IBarbecueRepository } from "@repositories/IBarbecueRepository";

import { GetBarbecueRequestDTO } from "./GetBarbecueDTO";

export class GetBarbecueUseCase {
	constructor(private barbecueRepository: IBarbecueRepository) { }

	async execute(data: GetBarbecueRequestDTO) {
		return this.barbecueRepository.get(data);
	}
}