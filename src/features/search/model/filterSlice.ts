import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
	selectedCategories: string[]
	searchTitle: string
	priceRange: [number, number]
}

const initialState: FilterState = {
	selectedCategories: [],
	searchTitle: '',
	priceRange: [0, 1000],
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setSelectedCategories: (state, action: PayloadAction<string[]>) => {
			state.selectedCategories = action.payload
		},
		setSearchTitle: (state, action: PayloadAction<string>) => {
			state.searchTitle = action.payload
		},
		setPriceRange: (state, action: PayloadAction<[number, number]>) => {
			state.priceRange = action.payload
		},
	},
})

export const { setSelectedCategories, setSearchTitle, setPriceRange } =
	filterSlice.actions
export default filterSlice.reducer
