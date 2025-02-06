import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './productThunk'
import type { IProductState } from './types'

const initialState: IProductState = {
	products: [],
	loading: false,
	error: null,
}

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
  extraReducers: builder => {
    builder
			.addCase(fetchProducts.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false
				state.products = action.payload
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || 'Failed to fetch pizzas'
			})
  },
})

export default productSlice.reducer