import { createSelector } from '@reduxjs/toolkit'
import { selectProducts } from '../../../entities/Product/model/selectors'
import type { RootState } from 'src/app/store'

export const selectSelectedCategories = (state: RootState) =>
	state.filter.selectedCategories

export const selectSearchTitle = (state: RootState) => state.filter.searchTitle

// Новый селектор для диапазона цены
export const selectPriceRange = (state: RootState) => state.filter.priceRange

export const selectFilteredProducts = createSelector(
	[selectProducts, selectSelectedCategories, selectPriceRange],
	(products, selectedCategories, priceRange) => {
		let filtered = products

		// Фильтрация по категориям (если выбраны)
		if (selectedCategories.length > 0) {
			filtered = filtered.filter(product =>
				selectedCategories.includes(product.title)
			)
		}

		filtered = filtered.filter(
			product =>
				product.price >= priceRange[0] && product.price <= priceRange[1]
		)

		return filtered
	}
)
