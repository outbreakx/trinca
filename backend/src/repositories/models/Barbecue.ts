import mongoose from "mongoose";

const BarbecueSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	observation: {
		type: String,
	},
	date: {
		type: Date,
	}
},
	{
		timestamps: true,
	}
);


const Barbecue = mongoose.models.Barbecue || mongoose.model('Barbecue', BarbecueSchema);

export default Barbecue;