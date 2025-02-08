import { apiGet } from '../base'

import { type IProducts } from '../../../entities/Product/model/types'

const PRODUCTS_ENDPOINT = 'products'

export const getProducts = async (
	offset: number,
	limitProduct: number
): Promise<IProducts[]> => {
	return await apiGet(
		`${PRODUCTS_ENDPOINT}?offset=${offset}&limit=${limitProduct}`
	)
}
