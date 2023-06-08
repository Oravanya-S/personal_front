import axios from './axios';

export const getGroupColor = () => axios.get('/admin/groupcolor');
export const getColor = () => axios.get('/admin/colors');
export const getBagType = () => axios.get('/admin/bagtypes');



