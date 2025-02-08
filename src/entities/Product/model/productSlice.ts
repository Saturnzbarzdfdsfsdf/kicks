import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchProducts } from './productThunk'
import type { IProductState, IProducts } from './types'

interface ApiResponse {
	meta: {
		total_items: number
		total_pages: number
		current_page: number
		per_page: number
		remaining_count: number
	}
	items: IProducts[]
}

const initialState: IProductState = {
	products: [],
	loading: false,
	error: null,
	totalPages: 1,
	currentPage: 1,
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
				(
					state,
					action: PayloadAction<{
						items: IProducts[]
						totalPages: number
						currentPage: number
					}>
				) => {
					state.loading = false
					state.products = action.payload.items
					state.totalPages = action.payload.totalPages
					state.currentPage = action.payload.currentPage
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
