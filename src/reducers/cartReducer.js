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
            if (itemIncluded != undefined) {
                if (itemIncluded.quantity > 1) {
                    itemIncluded.quantity -= 1;
                }
                else {
                    var index = state.cartItems.indexOf(action.payload.id);
                    console.log("removeFromCart " + action.payload.id);

                    console.log("removeFromCart2 " + index);
                    state.cartItems.splice(state.cartItems.findIndex(product => product.id === action.payload.id), 1);
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
    }
});

export const { addToCart, removeFromCart, setCartOrderId, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;