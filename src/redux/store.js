import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./propertySlice";
import cartReducer from "./cartSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
    cart: cartReducer,
  },
});
