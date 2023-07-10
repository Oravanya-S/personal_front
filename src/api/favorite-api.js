import axios from './axios';

export const getFavoriteByUserId = async (id) => await axios.get(`/favorites/${id}`);
export const addFavorite = async (addFavoritesObj) => await axios.post('/favorites', addFavoritesObj);
export const DeleteFavorite = async (id) => await axios.delete(`/favorites/${id}`);