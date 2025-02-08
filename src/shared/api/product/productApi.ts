import { apiGet } from '../base'

import type {IApiResponse } from '../../../entities/Product/model/types'

const PRODUCTS_ENDPOINT = '/sneakers'

export const getProducts = async (
	page: number = 1,
	limit: number = 6
): Promise<IApiResponse> => {
	const endpoint = `${PRODUCTS_ENDPOINT}?page=${page}&limit=${limit}`
	return await apiGet<IApiResponse>(endpoint)
}
