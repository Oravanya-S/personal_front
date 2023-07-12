import axios from './axios';

export const register = input => {
    return axios.post('/auth/register', input);
}
export const login = input => axios.post('/auth/login', input);
export const fetchMe = () => axios.get('/auth/me');


export const updateUser = async (updateUserObj) => await axios.put('/user/profile', updateUserObj);
// export const updatePassword = async (updateUserObj) => await axios.put('/user/password', updateUserObj);