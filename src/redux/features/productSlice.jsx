import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    error: null,
    status:"idle"
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('/api/products');
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json(); 
    return data;
});


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending,(state) => {
            state.status = "loading";
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
        })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
        })
    }
})

export default productSlice.reducer;