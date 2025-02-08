import { createAsyncThunk } from '@reduxjs/toolkit'

import { getProducts } from 'src/shared/api/product/productApi'

import type { ErrorType, RejectedDataType } from '../../../shared/api/ErrorType'
import type { IProducts, IApiResponse } from './types'

export const fetchProducts = createAsyncThunk<
	IProducts[], 
	void,
	{ readonly rejectValue: RejectedDataType }
>('products/fetchProducts', async (_, thunkAPI) => {
	const limitProduct = 6

	try {
		const response: IApiResponse = await getProducts(limitProduct)

		return response.items 

	} catch (err: any) {
		const knownError = err as ErrorType
		return thunkAPI.rejectWithValue({
			messageError: knownError.message || 'Unexpected error',
			status: knownError.response?.status,
		} as RejectedDataType)
	}
})
