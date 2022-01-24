import { IBarbecueRepository } from "@repositories/IBarbecueRepository";

import { DeleteBarbecueRequestDTO } from "./DeleteBarbecueDTO";

export class DeleteBarbecueUseCase {
	constructor(private barbecueRepository: IBarbecueRepository) { }

	async execute(data: DeleteBarbecueRequestDTO) {
		return this.barbecueRepository.delete(data);
	}
}