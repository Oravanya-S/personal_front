import axios from './axios';

export const getProductIdWishlistByUserId = async (id) => await axios.get(`/wishlist/products/${id}`);
export const getWishlistByUserId = async (id) => await axios.get(`/wishlist/${id}`);
export const addFavorite = async (addWishlistObj) => await axios.post('/wishlist', addWishlistObj);
