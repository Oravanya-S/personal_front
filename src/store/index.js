import { configureStore, createReducer } from '@reduxjs/toolkit';
import authReducer from '../features/auth/slice/auth-slice';
import adminReducer from '../features/auth/slice/admin-slice';
import modelReducer from '../features/auth/slice/model-slice';
import cartReducer from '../features/auth/slice/cart-slice';
import orderReducer from '../features/auth/slice/order-slice';
import wishlistReducer from '../features/auth/slice/wishlist-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    model: modelReducer,
    cart: cartReducer,
    order: orderReducer,
    wishlist: wishlistReducer,
  }
});

export default store;