import { v4 as uuid } from "uuid";

export class Barbecue {
	public readonly id: string;
	public name: string;
	public description: string;
	public observation: string;
	public date: Date;
	public user?: string;
	
	public createdAt?: Date;

	constructor(props: Omit<Barbecue, "id">, id?: string) {
		Object.assign(this, props);

		if (!id) {
			this.id = uuid();
		}

		this.createdAt = new Date();
	}
}