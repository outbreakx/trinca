import { Participant } from "@entities/Participant";

export interface IParticipantParams {
	id?: string;
	name?: string;
	amount?: number;
	confirmed?: boolean;
	barbecue?: string;
}


export interface IParticipantRepository {
	save(Participant: Participant): Promise<Participant>;
	update(params: IParticipantParams): Promise<Participant>;
	list(params?: IParticipantParams): Promise<Participant[] | null>;
	get(params: IParticipantParams): Promise<Participant | null>;
	delete(params: IParticipantParams): Promise<boolean>;
}