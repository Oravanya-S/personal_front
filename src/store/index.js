import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/slice/auth-slice';
import adminReducer from '../features/auth/slice/admin-slice';
import modelReducer from '../features/auth/slice/model-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: adminReducer,
    model: modelReducer,
  }
});

export default store;