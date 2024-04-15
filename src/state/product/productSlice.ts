import { createSlice } from "@reduxjs/toolkit";
import Product from "../../model/product";

interface IinitialState {
    product: Product
}

const initialState: IinitialState = {
    product:{
        id: "",
        title: "",
        image: "",
        subtitle: "",
        brand: "",
        sales: [],
        tags: []
    }
}

export const productSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        initializeProduct: (state, action) =>{
            state.product = action.payload;
        }
    }
})

export const {initializeProduct} = productSlice.actions;

export default productSlice.reducer;