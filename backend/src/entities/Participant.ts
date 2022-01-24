import { v4 as uuid } from "uuid";

export class Participant {
	public readonly id: string;
	public name: string;
	public amount: number;
	public confirmed: boolean;
	public barbecue: string;

	public createdAt?: Date;
	
	constructor(props: Omit<Participant, "id">, id?: string) {
		Object.assign(this, props);

		if (!id) {
			this.id = uuid();
		}

		this.createdAt = new Date();
	}
}