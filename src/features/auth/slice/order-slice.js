import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as orderService from '../../../api/order-api';

const initialState = {
    orderList: [],
    orderListAll: [],
    isLoading: []
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

export const orderListAllAsync = createAsyncThunk(
  "order/orderListAllAsync",
  async (_, thunkApi) => {
    try {
      const res = await orderService.orderAll();
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
        .addCase(orderListAsync.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(orderListAsync.fulfilled, (state, action) => {
          state.orderList = action.payload;
          state.isLoading = false;
        })
        .addCase(orderListAsync.rejected, (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        })
        .addCase(orderListAllAsync.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(orderListAllAsync.fulfilled, (state, action) => {
          state.orderListAll = action.payload;
          state.isLoading = false;
        })
        .addCase(orderListAllAsync.rejected, (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        })
  });

export default orderSlice.reducer;

export const {

} = orderSlice.actions;



export function checkPayment(session_id) {
  return async (dispatch) => {
    try {
      const response = await orderService.checkPayment(session_id);
    } catch (error) {
      console.log(error);
    }
  };
}
