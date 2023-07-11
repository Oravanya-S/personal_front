import axios from './axios';

export const updateUser = async (updateUserObj) => await axios.put('/user/profile', updateUserObj);