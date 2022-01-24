import { Barbecue } from "@entities/Barbecue";
import BarbecueModel from "@models/Barbecue";
import ParticipantModel from "@models/Participant";

import { IBarbecueParams, IBarbecueRepository } from "@repositories/IBarbecueRepository";
import { LeanDocument } from "mongoose";


export class MongoDbBarbecueRepository implements IBarbecueRepository {
	async save(barbecue: Barbecue): Promise<Barbecue> {
		return BarbecueModel.create(barbecue);
	}
	async update(params: IBarbecueParams): Promise<Barbecue> {
		const id = params.id;
		delete params.id;
		return BarbecueModel.findOneAndUpdate({
			_id: id
		},
			params, {
			new: true
		}).exec();
	}

	async list(params?: IBarbecueParams): Promise<Barbecue[] | LeanDocument<Barbecue>[]> {

		return BarbecueModel.find().lean().exec().then(async barbecues => {
			return Promise.all(barbecues.map(async (barbecue) => {
				const participants = await ParticipantModel.find({ barbecue: barbecue._id }).lean().exec();
				barbecue.totalParticipants = participants.length;
				barbecue.totalAmount = participants.map(item => item.confirmed ? item.amount : 0).reduce((a, b) => a + b, 0);
				return barbecue;
			}));
		});
	}

	async get(params: IBarbecueParams): Promise<Barbecue | LeanDocument<Barbecue>> {
		return BarbecueModel.findById(params.id).lean().exec();
	}

	async delete(params: IBarbecueParams): Promise<boolean> {
		if (params.id) {
			await await ParticipantModel.deleteMany({ barbecue: params.id }).exec();
		}
		return (await BarbecueModel.findOneAndDelete({ _id: params.id }).exec()) ? true : false;
	}
}