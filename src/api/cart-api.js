import axios from './axios';

export const getCartByUserId = async (id) => await axios.get(`/carts/${id}`);
export const addCart = async (addCartObj) => await axios.post('/carts', addCartObj);
export const updateCart = async (updateCartObj) => await axios.patch('/carts/updateQuantity', updateCartObj);
export const DeleteCart = async (id) => await axios.delete(`/carts/${id}`);

// export const updatePlusCart = async (updateCartObj) => await axios.patch('/carts', updateCartObj);
