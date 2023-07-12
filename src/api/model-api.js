import axios from './axios';

export const getProductByBagtype = async (id) => await axios.get(`/models/${id}`);
export const getProductById = async (id) => await axios.get(`/models/product/${id}`);
