import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as cartService from '../../../api/cart-api';

const initialState = {
    cartList: [],
    isLoading: true,
    payment:'',
    paymentSuccess:false
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

export const paymentAsync = createAsyncThunk(
  'cart/paymentAsync',
  async (input, thunkApi) => {
    try {
      console.log('cart/paymentAsync',input)
      const response = await cartService.payment(input);
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  } 
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const newCart = action.payload;
        const index = state.cartList.findIndex((el) => el.productId == newCart.productId && el.userId == newCart.userId);
        if(index==-1){
          state.cartList.unshift({...newCart, "quantity": 1});
        } else {
          state.cartList[index].quantity = state.cartList[index].quantity+1
        }
      },
      updateToCart: (state, action) => {
        const updateCart = action.payload;
        const index = state.cartList.findIndex((el) => el.productId == updateCart.productId && el.userId == updateCart.userId);
        state.cartList[index].quantity = updateCart.quantity
      },
      removeCart: (state, action) => {
        const cartId = action.payload;
        state.cartList = state.cartList.filter((cart) => cart.id != cartId);
      }
    },
    extraReducers: builder =>
      builder
        .addCase(cartListAsync.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(cartListAsync.fulfilled, (state, action) => {
          state.cartList = action.payload;
          state.isLoading = false;
        })
        .addCase(cartListAsync.rejected, (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        })
        .addCase(paymentAsync.pending, (state) => {
          state.isLoading = true;
          state.paymentSuccess =false;
        })
        .addCase(paymentAsync.fulfilled, (state, action) => {
          state.cartList = action.payload;
          state.isLoading = false;
          state.paymentSuccess =true;
        })
        .addCase(paymentAsync.rejected, (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        })
  });

export default cartSlice.reducer;

export const {
  addToCart,
  updateToCart,
  removeCart
} = cartSlice.actions;


export function addCart(addCartObj) {
  return async (dispatch) => {
    try {
      const response = await cartService.addCart(addCartObj);
      dispatch(addToCart(addCartObj));
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateCart(updateCartObj) {
  return async (dispatch) => {
    try {
      const response = await cartService.updateCart(updateCartObj);
      dispatch(updateToCart(updateCartObj));
    } catch (error) {
      console.log(error);
    }
  };
}

export function DeleteCart(id) {
  return async (dispatch) => {
    try {
      const response = await cartService.DeleteCart(id);
      dispatch(removeCart(id));
    } catch (error) {
      console.log(error);
    }
  };
}

export function checkout(checkoutObj) {
  return async (dispatch) => {
    try {
      const response = await cartService.checkout(checkoutObj);
    } catch (error) {
      console.log(error);
    }
  };
}


