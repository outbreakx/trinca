import mongoose from "mongoose";

const ParticipantSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	amount: {
		type: Number,
	},
	barbecue: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Barbecue',
	},
	confirmed: {
		type: Boolean,
		default: false
	}
},
	{
		timestamps: true,
	}
);


const Participant = mongoose.models.Participant || mongoose.model('Participant', ParticipantSchema);

export default Participant;