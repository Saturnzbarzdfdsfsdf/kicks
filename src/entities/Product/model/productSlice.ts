import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchProducts } from './productThunk'
import type { IProductState, IProducts } from './types'

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
			.addCase(
				fetchProducts.fulfilled,
				(state, action: PayloadAction<IProducts[]>) => {
					state.loading = false
					state.products = action.payload 
				}
			)
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false
				if (action.payload) {
					state.error =
						action.payload.messageError || 'Failed to fetch products'
				} else {
					state.error = action.error.message || 'Failed to fetch products'
				}
			})
	},
})

export default productSlice.reducer
