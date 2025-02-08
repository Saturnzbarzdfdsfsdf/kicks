import { apiGet } from '../base'

import type { IProducts } from '../../../entities/Product/model/types'

const PRODUCTS_ENDPOINT = '/sneakers'

export const getProducts = async (
	limitProduct: number
): Promise<IProducts[]> => {
	return await apiGet(`${PRODUCTS_ENDPOINT}?limit=${limitProduct}`)
}
