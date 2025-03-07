import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import { addItem } from './CartSlice';
import { removeItem } from './CartSlice';
import { updateQuantity } from './CartSlice';
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
