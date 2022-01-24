import { Barbecue } from "@entities/Barbecue";

export interface IBarbecueParams {
	id?: string;
	name?: string;
	description?: string;
	observation?: string;
	date?: Date
}


export interface IBarbecueRepository {
	save(Barbecue: Barbecue): Promise<Barbecue>;
	update(params: IBarbecueParams): Promise<Barbecue>;
	list(params?: IBarbecueParams): Promise<Barbecue[] | null>;
	get(params: IBarbecueParams): Promise<Barbecue | null>;
	delete(params: IBarbecueParams): Promise<boolean>;
}