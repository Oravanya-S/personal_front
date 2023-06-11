import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/slice/auth-slice';
import adminReducer from '../features/auth/slice/admin-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer
  }
});

export default store;