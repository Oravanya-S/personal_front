import axios from './axios';

export const orderAll = async () => await axios.get("/orders/all");
export const orderByUserId = async (id) => await axios.get(`/orders/${id}`);
export const checkPayment = async (id) => await axios.get(`/payment/${id}`);
