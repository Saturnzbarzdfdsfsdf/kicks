import { createAsyncThunk } from '@reduxjs/toolkit'

import type { IProducts } from './types'

export const fetchProducts = createAsyncThunk<IProducts[]>(
	'products/fetchProducts',
	async () => {
		const response = await fetch('https://8aaa47b20789e6b7.mokky.dev/sneakers')
		if (!response.ok) {
			throw new Error('Failed to fetch Products')
		}
		return response.json()
	}
)
