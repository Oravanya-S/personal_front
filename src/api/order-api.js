import axios from './axios';

export const orderByUserId = async (id) => await axios.get(`/orders/${id}`);
