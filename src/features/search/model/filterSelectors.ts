import { createSelector } from '@reduxjs/toolkit'
import { selectProducts } from 'src/entities/Product/model/selectors'
import type { RootState } from 'src/app/store'
import type { IProducts } from 'src/features/cart/model/cartSlice'

export const selectSelectedCategories = (state: RootState) =>
	state.filter.selectedCategories

export const selectSearchTitle = (state: RootState) => state.filter.searchTitle

export const selectPriceRange = (state: RootState) => state.filter.priceRange

export const selectSelectedSizes = (state: RootState) =>
	state.filter.selectedSizes

export const selectGroupedTitles = createSelector(
	[selectProducts],
	(products: IProducts[]) => {
		const titles = new Set<string>() // Используем Set для уникальности
		products.forEach(product => {
			titles.add(product.title)
		})
		return Array.from(titles) // Преобразуем Set в массив
	}
)

export const selectFilteredProducts = createSelector(
	[
		selectProducts,
		selectSelectedCategories,
		selectPriceRange,
		selectSelectedSizes,
	],
	(products, selectedCategories, priceRange, selectedSizes) => {
		let filtered = products

		// Фильтрация по категориям (если выбраны)
		if (selectedCategories.length > 0) {
			filtered = filtered.filter(product =>
				selectedCategories.includes(product.title)
			)
		}

		// Фильтрация по диапазону цены
		filtered = filtered.filter(
			product =>
				product.price >= priceRange[0] && product.price <= priceRange[1]
		)

		// Фильтрация по размеру (если выбраны)
		if (selectedSizes.length > 0) {
			filtered = filtered.filter(
				product =>
					product.sizes &&
					product.sizes.some(size => selectedSizes.includes(size))
			)
		}

		return filtered
	}
)
