import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as modelService from '../../../api/model-api';

const initialState = {
    modelListWithBagType: []
};

export const modelListWithBagTypeAsync = createAsyncThunk(
    "model/modelListWithBagTypeAsync",
    async (id, thunkApi) => {
      try {
        const res = await modelService.getProductByBagtype(id);
        return res.data;
      } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message);
      }
    }
);


  const modelSlice = createSlice({
    name: "model",
    initialState,
    reducers: {
    },
    extraReducers: (builder) =>
      builder
        .addCase(modelListWithBagTypeAsync.fulfilled, (state, action) => {
          state.modelListWithBagType = action.payload;
          // state.initialLoading = false;
        })
        .addCase(modelListWithBagTypeAsync.rejected, (state, action) => {
          state.error = action.payload;
          // state.initialLoading = false;
        })
  });
  
  export default modelSlice.reducer;