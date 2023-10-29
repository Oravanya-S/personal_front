import axios from './axios';

export const getProductByBagtype = async (id) => await axios.get(`/models/${id}`);
export const getProductByModel = async (id) => await axios.get(`/models/products/${id}`);
export const getProductById = async (id) => await axios.get(`/models/product/${id}`);
