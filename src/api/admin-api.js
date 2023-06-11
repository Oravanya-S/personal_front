import axios from './axios';

//update categories
export const getGroupColor = () => axios.get('/admin/groupcolor');
export const getColor = () => axios.get('/admin/colors');
export const getBagType = () => axios.get('/admin/bagtypes');
export const getModel = () => axios.get('/admin/models');

export const deleteBagtype = async (bagTypeId) => await axios.delete(`/admin/bagtype/${bagTypeId}`);
export const deleteColor = async (colorId) => await axios.delete(`/admin/color/${colorId}`);
export const deleteModel = async (modelId, updateModelObj) => await axios.delete(`/admin/model/${modelId}`, updateModelObj);

export const createBagtype = async (newBagtypeObj) => await axios.post('/admin/bagtype', newBagtypeObj);
export const createColor = async (newColorObj) => await axios.post('/admin/color', newColorObj);
export const createModel = async (newModelObj) => await axios.post('/admin/model', newModelObj);

export const updateBagtype = async (bagTypeId, updateBagtypeObj) => await axios.patch(`/admin/bagtype/${bagTypeId}`, updateBagtypeObj);
export const updateColor = async (colorId, updateColorObj) => await axios.put(`/admin/color/${colorId}`, updateColorObj);
export const updateModel = async (modelId, updateModelObj) => await axios.put(`/admin/model/${modelId}`, updateModelObj);


//add product



