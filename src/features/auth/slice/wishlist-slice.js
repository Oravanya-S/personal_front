import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as wishlistService from '../../../api/wishlist-api';

const initialState = {
    wishlist: [],
    productIdWishlist: [],
    isLoading: true
};

export const wishlistAsync = createAsyncThunk(
    "wishlist/wishlistAsync",
    async (id, thunkApi) => {
      try {
        const res = await wishlistService.getWishlistByUserId(id);
        return res.data;
      } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message);
      }
    }
);

export const wishlistAllProductIdAsync = createAsyncThunk(
    "wishlist/wishlistAllProductIdAsync",
    async (id, thunkApi) => {
      try {
        const res = await wishlistService.getProductIdWishlistByUserId(id);
        return res.data;
      } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message);
      }
    }
);

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
      addToWishlist: (state, action) => {
        const wishlist = action.payload;
        console.log(wishlist)
        const index = state.wishlist.findIndex((el) => el.productId == wishlist.productId && el.userId == wishlist.userId);
        if(index==-1){
          state.wishlist.unshift({...wishlist});
          state.productIdWishlist.unshift(+wishlist.productId);
        } else {
          const indexWishlist = state.productIdWishlist.findIndex((el) => el == wishlist.productId)
          state.wishlist.splice(index, 1)
          state.productIdWishlist.splice(indexWishlist, 1)
        }
        console.log(wishlist)
      },
    },
    extraReducers: builder =>
      builder
        .addCase(wishlistAsync.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(wishlistAsync.fulfilled, (state, action) => {
          state.wishlist = action.payload;
          state.isLoading = false;
        })
        .addCase(wishlistAsync.rejected, (state, action) => {
          state.error = action.payload;
        })
        .addCase(wishlistAllProductIdAsync.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(wishlistAllProductIdAsync.fulfilled, (state, action) => {
          state.productIdWishlist = action.payload;
          state.isLoading = false;
        })
        .addCase(wishlistAllProductIdAsync.rejected, (state, action) => {
          state.error = action.payload;
        })
  });

export default wishlistSlice.reducer;

export const {
  addToWishlist,
} = wishlistSlice.actions;


export function addFavorite(addWishlistObj) {
  return async (dispatch) => {
    try {
      const response = await wishlistService.addFavorite(addWishlistObj);
      dispatch(addToWishlist(addWishlistObj));
    } catch (error) {
      console.log(error);
    }
  };
}





