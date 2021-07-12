import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../features/counter/eCommerceSlice';

export const store = configureStore({
  reducer: {
    cart: basketReducer,
  },
});
