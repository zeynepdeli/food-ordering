// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";  // Örneğin

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Diğer reducer'lar
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
