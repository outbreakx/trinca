import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;
const api = axios.create({
	baseURL: BASE_URL
});

api.interceptors.request.use((config) => {
	/*
	const token = getToken();
	if(token) {
		config.headers.Authorization = `Bearer ${token}`;
	}*/
	return config;
}, (error) => {
	return Promise.reject(error);
});

export default api;