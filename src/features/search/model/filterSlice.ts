import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
	selectedCategories: string[]
	searchTitle: string
}

const initialState: FilterState = {
	selectedCategories: [],
	searchTitle: '',
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
	},
})

export const { setSelectedCategories, setSearchTitle } = filterSlice.actions
export default filterSlice.reducer
