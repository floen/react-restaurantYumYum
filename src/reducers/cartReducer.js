import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [{ id: "", quantity: 0 }],
    cartOrderId: "",

};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            var itemIncluded = state.cartItems.find(item => item.id === action.payload.id);
            if (itemIncluded) {
                itemIncluded.quantity += 1;
            }
            else {

                state.cartItems.push({ id: action.payload.id, quantity: action.payload.quantity });
            }
        },
        removeFromCart(state, action) {
            var itemIncluded = state.cartItems.find(item => item.id === action.payload.id);
            console.log(itemIncluded);
            if (itemIncluded.quantity > 1) {
                itemIncluded.quantity -= 1;
            }
            else {
                var index = state.cartItems.indexOf(action.payload.id);
                if (index > -1) {
                    state.cartItems.splice(index, 1);
                }
            }
        },
        emptyCart(state, action) {
            state.cartItems = [];
        },
        setCartOrderId(state, action) {
            state.cartOrderId = action.payload;
        }
        // Här kan vi lägga till fler reducers för att uppdatera vårt state ex. decrement
    },
});

export const { addToCart, removeFromCart, setCartOrderId, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;