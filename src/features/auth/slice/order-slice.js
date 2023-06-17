import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as orderService from '../../../api/order-api';

const initialState = {
    orderList: []
};

export const orderListAsync = createAsyncThunk(
    "order/orderListAsync",
    async (id, thunkApi) => {
      try {
        const res = await orderService.orderByUserId(id);
        return res.data;
      } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message);
      }
    }
);

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
    },
    extraReducers: builder =>
      builder
        .addCase(orderListAsync.fulfilled, (state, action) => {
          state.orderList = action.payload;
        })
        .addCase(orderListAsync.rejected, (state, action) => {
          state.error = action.payload;
        })
  });

export default orderSlice.reducer;

export const {

} = orderSlice.actions;



