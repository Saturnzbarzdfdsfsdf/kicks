
import { createSelector } from '@reduxjs/toolkit'
import { selectProducts } from '../../../entities/Product/model/selectors' 

import type { RootState } from 'src/app/store'

export const selectSelectedCategories = (state: RootState) =>
	state.filter.selectedCategories

export const selectSearchTitle = (state: RootState) => state.filter.searchTitle

export const selectFilteredProducts = createSelector(
	[selectProducts, selectSelectedCategories],
	(products, selectedCategories) => {
		// Если фильтр пустой, возвращаем все продукты
		if (selectedCategories.length === 0) {
			return products
		}
		// Пример фильтрации: оставляем продукты, title которых входит в выбранные категории
		return products.filter(product =>
			selectedCategories.includes(product.title)
		)
	}
)
