import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as cartService from '../../../api/cart-api';

const initialState = {
    cartList: []
};

export const cartListAsync = createAsyncThunk(
    "cart/cartListAsync",
    async (id, thunkApi) => {
      try {
        const res = await cartService.getCartByUserId(id);
        return res.data;
      } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message);
      }
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: builder =>
      builder
        .addCase(cartListAsync.fulfilled, state => {
          state.cartList = false;
        })
  });

export default cartSlice.reducer;