import { IBarbecueRepository } from "@repositories/IBarbecueRepository";

import { ListBarbecueRequestDTO } from "./ListBarbecueDTO";

export class ListBarbecueUseCase {
	constructor(private barbecueRepository: IBarbecueRepository) { }

	async execute(data: ListBarbecueRequestDTO) {
		for (const key in data) {
			if (data[key] === undefined) {
				delete data[key];
			}
		}
		return this.barbecueRepository.list(data);
	}
}