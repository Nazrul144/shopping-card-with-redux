import { createSlice } from "@reduxjs/toolkit";

interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
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
    reducers:{
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.price += product.price;
            } else {
                state.push(product);
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            return state.filter(item => item.id !== productId);
        },
        clearCart: () => {
            return [];
        }
    }

})


export default cartSlice.reducer;

export const { addToCart, removeFromCart} = cartSlice.actions