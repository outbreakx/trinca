import { Barbecue } from "@entities/Barbecue";
import { IBarbecueRepository } from "@repositories/IBarbecueRepository";

import { CreateBarbecueRequestDTO } from "./CreateBarbecueDTO";

export class CreateBarbecueUseCase {
	constructor(private barbecueRepository: IBarbecueRepository) { }

	async execute(data: CreateBarbecueRequestDTO) {
		const newBarbecue = new Barbecue(data);
		return this.barbecueRepository.save(newBarbecue);
	}
}