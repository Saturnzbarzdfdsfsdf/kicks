import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
	selectedCategories: string[]
	searchTitle: string
	priceRange: [number, number]
	// Добавляем фильтр по размеру
	selectedSizes: number[]
}

const initialState: FilterState = {
	selectedCategories: [],
	searchTitle: '',
	priceRange: [0, 1000],
	selectedSizes: [],
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
		// Экшн для переключения выбранного размера
		toggleSelectedSize: (state, action: PayloadAction<number>) => {
			const size = action.payload
			if (state.selectedSizes.includes(size)) {
				state.selectedSizes = state.selectedSizes.filter(s => s !== size)
			} else {
				state.selectedSizes.push(size)
			}
		},
	},
})

export const {
	setSelectedCategories,
	setSearchTitle,
	setPriceRange,
	toggleSelectedSize,
} = filterSlice.actions
export default filterSlice.reducer
