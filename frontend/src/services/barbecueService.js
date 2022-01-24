import api from "./api";

const barbecueService = {
	create: async (name, description, observation, date, user) => {
		return await api.post('/barbecues', { name, description, observation, date, user }).then((res) => res.data);
	},
	get: async (id) => {
		return await api.get(`/barbecues/${id}`).then((res) => res.data);
	},
	list: async () => {
		return await api.get('/barbecues').then((res) => res.data);
	},
	delete: async (id) => {
		return await api.delete(`/barbecues/${id}`).then((res) => res.data);
	},
};


export default barbecueService;