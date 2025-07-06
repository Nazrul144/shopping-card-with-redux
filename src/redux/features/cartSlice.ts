import { createSlice } from "@reduxjs/toolkit";

interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    quantity?: number,
}

const initialState: Product[] = [
    {
        id: 1,
        title: "Product 1",
        price: 100,
        description: "Description of Product 1",
        category: "Category 1"
    },
    {
        id: 2,
        title: "Product 2",
        price: 200,
        description: "Description of Product 2",
        category: "Category 2"
    },
    {
        id: 3,
        title: "Product 3",
        price: 300,
        description: "Description of Product 3",
        category: "Category 3"
    }
];



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload)
            const existingProduct = state.find((product) => product.id === action.payload.id)
            if (existingProduct) {
                alert("Product already exists in cart")
            } else {
                state.push({
                    ...action.payload,
                    id: Date.now(),
                    quantity: 1,
                    productId: action.payload.id,
                })
            }
        },


        // increment quantity
        increaseQuantity: (state, action) => {
            const product = state.find((product) => product.id === action.payload);
            if (product) {
                product.quantity = product.quantity ? product.quantity + 1 : 2;
            }
        },

        // decrement quantity
        decreaseQuantity: (state, action) => {
            const product = state.find((product) => product.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity--;
            }
        },

        // remove from cart
        removeFromCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload)
        },
    }

})


export default cartSlice.reducer;

export const { addToCart, removeFromCart } = cartSlice.actions