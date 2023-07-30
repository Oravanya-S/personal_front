import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as wishlistService from '../../../api/wishlist-api';

const initialState = {
    wishlist: [],
    wishlistFilter: [],
    productIdWishlist: [],
    groupColorFilterWishlist: {},
    priceFilterWishlist: "",
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
        const index = state.wishlist.findIndex((el) => el.productId == wishlist.productId && el.userId == wishlist.userId);
        if(index==-1){
          state.wishlist.unshift({...wishlist});
          state.productIdWishlist.unshift(+wishlist.productId);
        } else {
          const indexWishlist = state.productIdWishlist.findIndex((el) => el == wishlist.productId)
          const indexWishlistFilter = state.wishlistFilter.findIndex((el) => el.productId == wishlist.productId)
          state.wishlist.splice(index, 1)
          state.wishlistFilter.splice(indexWishlistFilter, 1)
          state.productIdWishlist.splice(indexWishlist, 1)
        }
      },

      searchProductWishlist: (state, action) => {
        const groupColorFilterWishlist = action.payload
        state.groupColorFilterWishlist = action.payload;
        if(Object.keys(state.groupColorFilterWishlist).length === 0) {
          if(state.priceFilterWishlist.trim() === "") state.wishlistFilter = state.wishlist
          else if (state.priceFilterWishlist==21) state.wishlistFilter = [...state.wishlist].sort((a,b) => (b.Product.price - a.Product.price))
          else if (state.priceFilterWishlist==22) state.wishlistFilter = [...state.wishlist].sort((a,b) => (a.Product.price - b.Product.price))
        }
        else {
          state.wishlistFilter = state.wishlist.filter((product) => Object.values(groupColorFilterWishlist).includes(String(product?.Product?.Color?.groupColorId)))
          if (state.priceFilterWishlist==21) state.wishlistFilter = state.wishlistFilter.sort((a,b) => (b.Product.price - a.Product.price))
          else if (state.priceFilterWishlist==22) state.wishlistFilter = state.wishlistFilter.sort((a,b) => (a.Product.price - b.Product.price))
        }
      },
      sortPriceWishlist: (state, action) => {
        const priceFilterWishlist = action.payload
        state.priceFilterWishlist = action.payload;
        if(priceFilterWishlist.trim() === "") {
          if (Object.keys(state.groupColorFilterWishlist).length === 0) state.wishlistFilter = state.wishlist
          else state.wishlistFilter = state.wishlist.filter((product) => Object.values(state.groupColorFilterWishlist).includes(String(product?.Product?.Color?.groupColorId)))
        }
        else {
          if (priceFilterWishlist==21) state.wishlistFilter = state.wishlistFilter.sort((a,b) => (b.Product.price - a.Product.price))
          else if (priceFilterWishlist==22) state.wishlistFilter = state.wishlistFilter.sort((a,b) => (a.Product.price - b.Product.price))
        } 
      },

    },
    extraReducers: builder =>
      builder
        .addCase(wishlistAsync.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(wishlistAsync.fulfilled, (state, action) => {
          state.wishlist = action.payload;
          state.wishlistFilter = state.wishlist
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
  searchProductWishlist,
  sortPriceWishlist,
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





