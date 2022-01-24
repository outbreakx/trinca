import { Participant } from "@entities/Participant";
import ParticipantModel from "@models/Participant";

import { IParticipantParams, IParticipantRepository } from "@repositories/IParticipantRepository";
import { LeanDocument } from "mongoose";


export class MongoDbParticipantRepository implements IParticipantRepository {
	async save(participant: Participant): Promise<Participant> {
		return ParticipantModel.create(participant);
	}
	async update(params: IParticipantParams): Promise<Participant> {
		const id = params.id;
		delete params.id;
		return ParticipantModel.findOneAndUpdate({
			_id: id
		},
			params, {
			new: true
		}).exec();
	}

	async list(params?: IParticipantParams): Promise<Participant[] | LeanDocument<Participant>[]> {
		return ParticipantModel.find({
			barbecue : params.barbecue
		}).lean().exec();
	}

	async get(params: IParticipantParams): Promise<Participant | LeanDocument<Participant>> {
		return ParticipantModel.findById(params.id).lean().exec();
	}

	async delete(params: IParticipantParams): Promise<boolean> {
		return (await ParticipantModel.findOneAndDelete({ _id: params.id }).exec()) ? true : false;
	}
}