import api from "./api";

const participantService = {
	create: async (name, amount, barbecueId) => {
		return await api.post('/participants', { name, amount, barbecueId }).then((res) => res.data);
	},
	list: async (barbecueId) => {
		return await api.get(`/participants?barbecueId=${barbecueId}`).then((res) => res.data);
	},
	update: async (id, confirmed) => {
		return await api.put(`/participants/${id}`, { confirmed }).then((res) => res.data);
	}
};


export default participantService;