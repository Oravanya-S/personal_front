import axios from './axios';

export const getProductByBagtype = async (id) => await axios.get(`/models/${id}`);
