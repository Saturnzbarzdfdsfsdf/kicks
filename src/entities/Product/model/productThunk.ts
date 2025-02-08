import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts } from 'src/shared/api/product/productApi'
import type { ErrorType, RejectedDataType } from '../../../shared/api/ErrorType'
import type { IProducts, IApiResponse } from './types'

export const fetchProducts = createAsyncThunk<
	{ items: IProducts[]; totalPages: number; currentPage: number },
	{ page?: number; limit?: number },
	{ readonly rejectValue: RejectedDataType }
>('products/fetchProducts', async ({ page = 1, limit = 6 }, thunkAPI) => {
	try {
		const response: IApiResponse = await getProducts(page, limit)
		return {
			items: response.items,
			totalPages: response.meta.total_pages,
			currentPage: response.meta.current_page,
		}
	} catch (err: any) {
		const knownError = err as ErrorType
		return thunkAPI.rejectWithValue({
			messageError: knownError.message || 'Unexpected error',
			status: knownError.response?.status,
		} as RejectedDataType)
	}
})
