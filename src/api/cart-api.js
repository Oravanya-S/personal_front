import axios from './axios';

export const getCartByUserId = async (id) => await axios.get(`/carts/${id}`);
export const addCart = async (userId, productId) => await axios.post('/carts');
